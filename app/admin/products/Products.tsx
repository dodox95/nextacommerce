'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

export default function Products() {
  const { data: products, error } = useSWR(`/api/admin/products`)
  const [showModal, setShowModal] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)
  const router = useRouter()

  const { trigger: deleteProduct } = useSWRMutation(
    `/api/admin/products`,
    async (url, { arg }: { arg: { productId: string } }) => {
      const toastId = toast.loading('Deleting product...')
      const res = await fetch(`${url}/${arg.productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      setShowModal(false) // Hide modal after operation
      res.ok
        ? toast.success('Product deleted successfully', {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          })
      // Refetch products after deletion
      // if (res.ok) router.replace(router.asPath)
    }
  )

const { trigger: createProduct, isMutating: isCreating } = useSWRMutation(
    `/api/admin/products`,
    async (url) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      if (!res.ok) return toast.error(data.message)

      toast.success('Product created successfully')
      router.push(`/admin/products/${data.product._id}`)
    }
  )

  if (error) return <p>An error has occurred.</p>
  if (!products) return <p>Loading...</p>

  const handleDeleteClick = (productId: string) => {
    setProductToDelete(productId)
    setShowModal(true)
  }

  const confirmDelete = () => {
    if (productToDelete) {
      deleteProduct({ productId: productToDelete })
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl">Products</h1>
        <button
          disabled={isCreating}
          onClick={() => createProduct()}
          className="btn btn-primary btn-sm"
        >
          {isCreating ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Create"
          )}
    </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>category</th>
              <th>count in stock</th>
              <th>rating</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.countInStock}</td>
                <td>{product.rating}</td>
                <td>
                  <Link href={`/admin/products/${product._id}`}>
                  <button type="button" className="btn btn-info btn-sm">
                   Edit
                  </button>
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => handleDeleteClick(product._id)}
                    type="button"
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure you want to delete this product?</h3>
            <div className="modal-action">
              <button onClick={confirmDelete} className="btn btn-error">
                Yes
              </button>
              <button onClick={() => setShowModal(false)} className="btn">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
