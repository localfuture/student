const express = require(express);
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/student'));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/student/index.html'));
});

app.listen(process.env.PORT || 3000);

