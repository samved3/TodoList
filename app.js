const express=require('express');
const bodyParser=require('body-parser');
const date=require(__dirname+'/date.js');
let day=date.getDate();
app = express();
app.set('view engine', 'ejs');
var inputUser=["Buy food","Eat Food","Make more food"];
var workList=["buy some"];
app.listen(3000,(req,res)=>console.log("listening at port 3000")) ;

app.use(express.static("public"));
app.get("/",(req,res)=>{
res.render("list",{ListTitle:day,entries:inputUser})
});

app.get("/work",(req,res)=>{
  res.render("list",{ListTitle:"Work",entries:workList})
});
app.use(bodyParser.urlencoded({extended:true}));
app.post("/",(req,res)=>{
let temp = req.body.list;
let item=req.body.input;
console.log(temp);
if(temp==="Work")
{
  workList.push(item);
  res.redirect('/work');
}
else{

inputUser.push(item);
res.redirect('/');}
});

app.post("/work",(req,res)=>{

res.redirect('/work');
});

app.get("/about",(req,res)=>{res.render("about");});
