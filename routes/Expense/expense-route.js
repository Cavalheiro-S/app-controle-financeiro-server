const express = require("express");
const routerExpense = express.Router();
const ExpenseModel = require("../../data/modules/Expense");

routerExpense.get("/", async(req, res) => {
    try{
        const expense = await ExpenseModel.find();
        res.status(200).json(expense);
    }
    catch(err){
        res.status(400).json({message: err});
    }
})

routerExpense.get("/total", async(req,res) => {
    try {
        const expese = await ExpenseModel.find({}, {_id:0,value:1})
        let total = 0;
        expese.forEach( expeseItem => {
            total += expeseItem.value
        })
        res.status(200).json(total);
    } catch (error) {
        res.status(400).json({message: error});
    }
})

routerExpense.get("/:idExpense", async(req,res) => {
    try {
        const expense = await ExpenseModel.findById(req.params.idExpense);
        console.log(expense);
        res.status(200).json(expense);
    } catch (error) {
        res.status(400).json({message: error})
    }
})

routerExpense.post("/", async(req,res) => {
    try{
        const expense = await new ExpenseModel({
            name: req.body.name,
            type: req.body.type,
            value: req.body.value,
            date: req.body.date
        })
        await expense.save();
        res.status(200).json(expense);
    }
    catch(err){
        res.status(400).json({message: err})
    }
})

routerExpense.delete("/:idExpense", async(req,res) => {
    try {
        const result = await ExpenseModel.deleteOne({_id: req.params.idExpense});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({message:error})
    }
})

module.exports = routerExpense