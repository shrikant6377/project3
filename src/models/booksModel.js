const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
const ObjectId= mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    userId: { type: ObjectId, required: true, ref: 'User' },
    ISBN: { type: String, required: true, unique: true },
    bookcover:{type:String, required:true},
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    reviews: { type: Number, default: 0 },
    deletedAt: { type: Date, },
    isDeleted: { type: Boolean, default: false },
    releasedAt: { type: String,required:true, default: Date.now()
    }
},{ timestamps: true });

module.exports = mongoose.model('books', bookSchema)