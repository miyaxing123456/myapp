const mongoose = require("./db.js");
const schema = new mongoose.Schema({
    title:{type:String}
});
const model=mongoose.model("mine",schema);
module.exports=model;