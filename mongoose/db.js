const mongoose = require("mongoose");
let url ="mongodb://localhost:27017/mine";
mongoose.connect(url);
mongoose.connection.on("connected",()=>{
    console.log("连接数据库mine成功");
});
mongoose.connection.on("error",()=>{
    console.log("连接数据库mine失败");
});
module.exports=mongoose;