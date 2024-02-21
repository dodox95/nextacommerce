// app\api\admin\orders\[id]\unpaid\route.ts
import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import OrderModel from '@/lib/models/OrderModel'

export const PUT = auth(async (...args: any) => {
  const [req, { params }] = args
  if (!req.auth || !req.auth.user.isAdmin) {
    return Response.json(
      { message: 'Unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const order = await OrderModel.findById(params.id)
  if (order) {
    try {
      order.isPaid = false
      order.paidAt = null // Or keep the original paidAt if you want to retain the payment date
      const updatedOrder = await order.save()
      return Response.json(updatedOrder)
    } catch (err: any) {
      return Response.json(
        { message: err.message },
        {
          status: 500,
        }
      )
    }
  } else {
    return Response.json(
      { message: 'Order not found' },
      {
        status: 404,
      }
    )
  }
}) as any
