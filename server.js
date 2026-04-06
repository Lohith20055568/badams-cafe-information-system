const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(express.json());
app.use(express.static("client"));

async function readData(){
const raw = await fs.readFile(DATA_FILE,"utf8");
return JSON.parse(raw);
}

async function writeData(data){
await fs.writeFile(DATA_FILE,JSON.stringify(data,null,2)
}

app.get("/api/menu",async(req,res)=>{
const data = await readData();
res.json(data.menu);
});

app.post("/api/menu",async(req,res)=>{
const {name,price,category}=req.body;
const data = await readData();

const id = data.nextIds.menu++;

const item={
id,
name,
price:Number(price),
category
};

data.menu.push(item);
await writeData(data);

res.status(201).json(item);
});

app.delete("/api/menu/:id",async(req,res)=>{
const data=await readData();

data.menu=data.menu.filter(m=>m.id!=req.params.id);

await writeData(data);  

res.json({messages:"deleted"});
});

app.get("api/order",async(req,res)=>{
const data=await readData();
res.json(data.orders);
});

app.post("/api/orders",async(req,res)=>{
const {menuId,quantity}=req.body;

const data=await readData();

const item=data.menu.find(m=>m.id==menuId);

const total=item.price*quantity;

const id=data.nextIds.orders++;

const order={
id,
item:item.name,
quantity,
total,
status:"pending"
};
  

