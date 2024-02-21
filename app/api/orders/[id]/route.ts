import dbConnect from '@/lib/dbConnect'
import OrderModel from '@/lib/models/OrderModel'
import { auth } from '@/lib/auth'

export const GET = auth(async (...request: any) => {
  const [req, { params }] = request
  if (!req.auth) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const order = await OrderModel.findById(params.id)
  return Response.json(order)
}) as any


// Dodaj to na końcu pliku `app\api\admin\orders\route.ts`

export const DELETE = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
  await dbConnect()

  const { orderId } = req.params // Zakładając, że ID zamówienia przekazano w URL

  try {
    const order = await OrderModel.findByIdAndDelete(orderId)
    if (!order) {
      return Response.json({ message: 'Order not found' }, { status: 404 })
    }
    return Response.json({ message: 'Order deleted successfully' }, { status: 200 })
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 })
  }
}) as any
