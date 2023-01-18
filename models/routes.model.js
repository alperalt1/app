const mongoose = require('mongoose')

var routerSchema = new mongoose.Schema({
    Store_ID: { type: String, required: ' This field is required', },
    Store_Area: { type: String, required: ' This field is required', },
    Items_Available: { type: String, required: ' This field is required', },
    Daily_Customer_Count: { type: String, required: ' This field is required', },
    Store_Sales: { type: String, required: ' This field is required', },
});

mongoose.model("Routes", routerSchema);
