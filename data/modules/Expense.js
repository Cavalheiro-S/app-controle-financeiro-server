const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    value:{
        type:Number,
        required: true
    },
    date:{
        type:Date,
        required: true
    }
})

module.exports = mongoose.model("Expense", expenseSchema);