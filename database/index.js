var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photoGalleryDB', { 
  useNewUrlParser: true
}); 

let photoGallerySchema = mongoose.Schema({
    listingId: Number,
    imageUrl: String,
    description: String
  });

let Photo = mongoose.model('Photo', photoGallerySchema);

var test = new Photo({listingId: 123, imageUrl: 'path.test', description: 'testing database'});
test.save(function (err) {
  if (err) {
    console.log(err);
  }
});

const findAllPhotos = (cb) => {
  console.log('successfully reached database');
  Photo.find(function (err, data) {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  })
}

module.exports.findAllPhotos = findAllPhotos;
