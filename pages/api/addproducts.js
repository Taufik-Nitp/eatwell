import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'
import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes'

const handler = async (req, res) => {

     if(req.method=='POST'){
        console.log(req.body);
        for(let i=0;i<req.body.length;i++){
          let p = new Product({
            slug: req.body[i].slug,
            category: req.body[i].category,
            desc: req.body[i].desc,
            img: req.body[i].img,
            price: req.body[i].price,
          
          })
          await p.save()
        }
        res.status(200).json({ sucess: 'sucess' })
     }else{
        res.status(400).json({ err: "This method is not allowed" })
     }

}

export default connectDb(handler)
