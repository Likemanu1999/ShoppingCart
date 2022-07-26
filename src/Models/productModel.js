const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            unique: true
          },
          description:{
            type: String,
            require:true,
            trim:true
          },
          price:{
            type:Number, //decimal
            required:true,
            trim:true
          },
          currencyId:{
            type:String, // rupee symbol
            required: true,
            trim: true
          },
          currencyFormat:{
            type:String,
            required:true,
            trim:true
          },
          isFreeShipping:{
            type:Boolean, 
            default: false,
          },
          productImage:{
            type:String,  // s3 link
            required:true,
            trim: true
          },
          style:{
            type:String,
            trim:true
          },
          availableSizes: [{ 
            type:[String], 
            trim:true,
            }], 
            installments:{
                type:Number,
                trim:true
            },
            deletedAt: {
                type:Date
            }, 
            isDeleted: {
                type:Boolean, 
                default: false
            }
            },{timestamps:true}
        )
        
module.exports = mongoose.model('Product',productSchema)
