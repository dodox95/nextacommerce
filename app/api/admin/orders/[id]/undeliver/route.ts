// app\api\admin\orders\[id]\undeliver\route.ts
import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import OrderModel from '@/lib/models/OrderModel'

export const PUT = auth(async (...args: any) => {
  const [req, { params }] = args
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  try {
    await dbConnect()

    const order = await OrderModel.findById(params.id)
    if (order) {
      order.isDelivered = false
      order.deliveredAt = null
      const updatedOrder = await order.save()
      return Response.json(updatedOrder)
    } else {
      return Response.json(
        { message: 'Order not found' },
        {
          status: 404,
        }
      )
    }
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
}) as any
