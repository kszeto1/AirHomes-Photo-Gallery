let photoGallerySchema = mongoose.Schema({
  //   // TODO: your schema here!
    location: String,
    image: Buffer,
    description: String
  });

  let Photo = mongoose.model('Photo', photoGallerySchema);