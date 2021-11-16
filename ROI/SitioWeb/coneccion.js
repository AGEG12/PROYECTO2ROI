const mongoose = require('mongoose');

const url = 'mongodb://localhost/ROIStore';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected to :' + url))
.catch((err) => console.log(err))