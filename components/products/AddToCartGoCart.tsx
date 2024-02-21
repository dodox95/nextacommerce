'use client'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter()
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()
  const [itemAdded, setItemAdded] = useState(false) // New state to track if item has been added

  useEffect(() => {
    const foundItem = items.find((x) => x.slug === item.slug)
    setExistItem(foundItem)
    // If the item exists in cart, set itemAdded to true
    if (foundItem) {
      setItemAdded(true)
    }
  }, [item, items])

  const addToCartHandler = () => {
    increase(item)
    setItemAdded(true) // Update state to indicate item has been added
  }

  const goToCartHandler = () => {
    router.push('/cart') // Use Next.js router to redirect to the cart page
  }

  return existItem ? (
    <div>
      <button className="btn" type="button" onClick={() => decrease(existItem)}>
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
      <button className="btn btn-secondary ml-2" type="button" onClick={goToCartHandler}>
        Go to cart
      </button>
    </div>
  ) : itemAdded ? ( // Conditional rendering based on itemAdded
    <button
      className="btn btn-secondary w-full"
      type="button"
      onClick={goToCartHandler}
    >
      Go to cart
    </button>
  ) : (
    <button
      className="btn btn-primary w-full"
      type="button"
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  )
}
