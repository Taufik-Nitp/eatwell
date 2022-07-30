

const mongoose= require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
        slug: {
     type: String ,
      required: true, 
      unique: true
    },
    category:{type:String, required:true},
    desc: { type: String, required: true },
    img: { type: String,required:true},
    price: { type: Number, required: true },
      },
  { timestamps: true }
)
mongoose.models={}
export default mongoose.model("Product",ProductSchema);