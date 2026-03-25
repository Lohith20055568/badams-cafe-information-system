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


