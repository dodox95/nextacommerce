import { Metadata } from 'next'
import Warranty from './Warranty'

export const metadata: Metadata = {
  title: 'Place Order',
}

export default async function PlaceOrderPage() {
  return <Warranty />
}
