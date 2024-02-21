import { Metadata } from 'next'
import ReturnPolicyDetails from './ReturnPolicyDetails'

export const metadata: Metadata = {
  title: 'Place Order',
}

export default async function PlaceOrderPage() {
  return <ReturnPolicyDetails />
}
