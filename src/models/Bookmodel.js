const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: string,
        tags : [ string ],
        
        
    },
    }, 
    price: Number,
    ratings: Number

}, { timestamps: true });
module.exports = mongoose.model('LibraryBook', bookSchema)