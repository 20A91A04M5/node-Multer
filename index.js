
var express=require("express")
var multer=require("multer")
var app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hii root page")
})

var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname+"/images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

var upload=multer({storage:storage})

app.post('/reg',upload.array("file"),(req,res)=>{
    console.log(req.body)
    res.send({
        file:req.files,
        body:req.body
    })

})

app.listen(3003,()=>{
    console.log("server running...!")
})


