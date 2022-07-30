import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes'
var CryptoJS = require('crypto-js')
const handler = async (req, res) => {
  if (req.method == 'POST') {
    console.log(req.body)
    const {name,email}=req.body
    let user= new User({
        name,
        email,
        password: CryptoJS.AES.encrypt(req.body.password,"secret123").toString()
    })
    await user.save()
    res.status(200).json({ success: 'sucess signup api' })
  } else {
    res.status(400).json({ err: 'This method is not allowed' })
  }
}

export default connectDb(handler)
