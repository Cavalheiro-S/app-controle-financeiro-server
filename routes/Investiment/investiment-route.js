const express = require("express");
const routerInvestiment = express.Router();
const InvestimentModel = require("../../data/modules/Investiment");

routerInvestiment.get("/", async(req, res) => {
    try{
        const investiment = await InvestimentModel.find();
        res.status(200).json(investiment);
    }
    catch(err){
        res.status(400).json({message: err});
    }
})

routerInvestiment.get("/total", async(req,res) => {
    try {
        const investiment = await InvestimentModel.find({}, {_id:0,value:1})
        let total = 0;
        investiment.forEach( investimentItem => {
            total += investimentItem.value
        })
        res.status(200).json(total);
    } catch (error) {
        res.status(400).json({message: error});
    }
})

routerInvestiment.get("/:idInvestiment", async(req,res) => {
    try {
        const investiment = await InvestimentModel.findById(req.params.idInvestiment);
        console.log(investiment);
        res.status(200).json(investiment);
    } catch (error) {
        res.status(400).json({message: error})
    }
})

routerInvestiment.post("/", async(req,res) => {
    try{
        const investiment = await new InvestimentModel({
            name: req.body.name,
            type: req.body.type,
            value: req.body.value,
            date: req.body.date
        })
        await investiment.save();
        res.status(200).json(investiment);
    }
    catch(err){
        res.status(400).json({message: err})
    }
})

routerInvestiment.delete("/:idInvestiment", async(req,res) => {
    try {
        const result = await InvestimentModel.deleteOne({_id: req.params.idInvestiment});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({message:error})
    }
})

module.exports = routerInvestiment