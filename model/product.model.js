const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true

    },
    name:{
        type:String,
        required:[true,"Please enter a product"]
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:["electronics","kitchen","furniture","clothing"]
    },
    inStock:{
        type:Boolean,
        default:true,
        required:true
    }
    

},{timestamps:true});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
