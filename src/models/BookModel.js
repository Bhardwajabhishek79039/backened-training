const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String, required: true},
    authorName: String,
    tags: [string],



       
      year: {type:Number,default:2021},
      prices: {
        indianprice: string,
        europeprice: string,
      },
      totalpages :Number,
      stockAvailable:Boolean
    },{ timestamps: true });

    module.exports = mongoose.model(Book-collection', bookschema)

        

    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) 
