// Orders.tsx
'use client'
import { useState } from 'react'
import { Order } from '@/lib/models/OrderModel'
import Link from 'next/link'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import toast from 'react-hot-toast'

export default function Orders() {
  const { data: orders, error, mutate } = useSWR(`/api/admin/orders`)
  const [showModal, setShowModal] = useState(false)
  const [orderToDelete, setOrderToDelete] = useState(null)

  const { trigger: deleteOrder } = useSWRMutation(
    `/api/admin/orders`,
    async (url, { arg }: { arg: { orderId: string } }) => {
      const toastId = toast.loading('Deleting order...')
      const res = await fetch(`${url}/${arg.orderId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      setShowModal(false) // Hide modal after operation
      if (res.ok) {
        toast.success('Order deleted successfully', {
          id: toastId,
        })
        mutate() // Revalidate the orders data
      } else {
        toast.error(data.message, {
          id: toastId,
        })
      }
    }
  )

  if (error) return <p>An error has occurred.</p>
  if (!orders) return <p>Loading...</p>

  const handleDeleteOrderClick = (orderId: string) => {
    setOrderToDelete(orderId)
    setShowModal(true)
  }

  const confirmDelete = () => {
    if (orderToDelete) {
      deleteOrder({ orderId: orderToDelete })
    }
  }

  return (
    <div>
      <h1 className="py-4 text-2xl">Orders</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Order) => (
              <tr key={order._id}>
                <td>..{order._id.substring(20, 24)}</td>
                <td>{order.user?.name || 'Deleted user'}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid && order.paidAt
                    ? `${order.paidAt.substring(0, 10)}`
                    : 'not paid'}
                </td>
                <td>
                  {order.isDelivered && order.deliveredAt
                    ? `${order.deliveredAt.substring(0, 10)}`
                    : 'not delivered'}
                </td>
                <td>
                  <Link href={`/order/${order._id}`} passHref>
                    <button className="btn btn-primary">
                      Details
                    </button>
                  </Link>
                  &nbsp; {/* Add some space between buttons */}
                  <button
                    onClick={() => handleDeleteOrderClick(order._id)}
                    type="button"
                    className="btn btn-error"
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
            <h3 className="font-bold text-lg">
              Are you sure you want to delete this order?
            </h3>
            <div className="modal-action">
              <button onClick={confirmDelete} className="btn btn-error">
                Delete
              </button>
              <button onClick={() => setShowModal(false)} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
