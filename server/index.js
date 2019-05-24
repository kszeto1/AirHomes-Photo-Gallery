const app = require('./app');

const port = process.env.PORT || 3003;

app.listen(port, () => { return console.log('Listening on Port:', port); });
