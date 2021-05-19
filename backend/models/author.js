const mangoose =require("mongoose");





const authorSchema = mangoose.Schema({
 name : {
     trim: true,
     type :String , 
     unique : true , 
     required : true,  
 },
});

const Author = mangoose.model("Author", authorSchema);

module.exports =Author;