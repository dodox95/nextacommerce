import { Metadata } from 'next'
import PrivacyPolicy from './PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Place Order',
}

export default async function PlaceOrderPage() {
  return <PrivacyPolicy />
}
