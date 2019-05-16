var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photoGalleryDB', {useNewUrlParser: true}); 

let photoGallerySchema = mongoose.Schema({
    listingId: Number,
    imageUrl: String,
    description: String
  });

let Photo = mongoose.model('Photo', photoGallerySchema);