var fs=require('fs')
var http=require('http')


fs.appendFile('demo.txt',"This is a demo file",function(err){
    if(err) throw err
    console.log("Text Appended Successfully")
})

fs.readFile('demo.txt','utf-8',function(err,data){
    if(err) throw err
    console.log("File Data:")
    console.log(data)
})

fs.writeFile('demo.txt',"The New Content!",function(err){
    if(err) throw err
    console.log("Saved!")
    fs.readFile('demo.txt','utf-8',function(err,data){
        if(err) throw err
        console.log("File Data:")
        console.log(data)
    })
})

fs.unlink('demo.txt',function(err){
    if(err) throw err
    console.log("File Deleted Successfully")
})