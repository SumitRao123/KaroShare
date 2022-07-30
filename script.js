const File = require("./models/file");

const fs =  require("fs");

const connectDb =  require("./Config/db.");
connectDb();

 async function fetchData(){
    // 24 hours
    const pastDate =  new Date(Date.now() - 24*60*60*1000);
    
    const files = await File.find({ createdAt : { $lt: pastDate } } );

    if(files.length){
        for(const file of files ){
             try{
                    fs.unlinkSync(file.path);
                    await file.remove();
                    console.log(`Successfully Deleted ${file.filename}`);
                }
                catch(err){
                    console.log(`error while deleting file ${err}`);
                }
                
            }
            console.log(`Job Done`);
    }
}

fetchData().then(process.exit)
