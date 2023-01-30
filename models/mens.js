//we are create schema here
const express=require("express");

const mongoose=require("mongoose");
const menSchema=new mongoose.Schema({
    ranking:
    {
        type:Number,
        required:true,
        unique:true
    },
    name:
    {
    type:String,
    required:true,
    trim:true
    },
    dob:
    {
        type:Date,
        required:true,
        trim:true
    },
    country:
    {
        type:String,
        require:true
    },
    score:
    {
        type:Number,
        require:true
    }
})

const mensRanking=new mongoose.model("MensRanking",menSchema);
module.exports=mensRanking;