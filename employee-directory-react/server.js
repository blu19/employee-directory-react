console.log("hello");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;
const path = require("path");

app.use(express.static("public"));

app.get("*", function(req, res){
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(PORT, function(){
    console.log("APp listening on PORT:", PORT);
});