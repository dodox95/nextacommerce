// app\api\admin\orders\[id]\route.ts
import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import OrderModel from '@/lib/models/OrderModel' // Ensure you have an OrderModel

export const DELETE = auth(async (...args: any) => {
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
      await order.deleteOne()
      return Response.json({ message: 'Order deleted successfully' })
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
