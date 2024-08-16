const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName: { 
        type: String, 
        required: [true, 'This Feild Must be Required'],
        trim:true,
     },
     author:{
        type: String, 
        required: [true, 'This Feild Must be Required'],
        trim:true,
     },
     quantity:{
        type: Number, 
        required: [true, 'This Feild Must be Required'],
     }
})


module.exports= mongoose.model('Book', BookSchema);