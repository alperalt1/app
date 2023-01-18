const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://alperalt:final12.@cluster0.qs1qvmb.mongodb.net/router_db', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');
