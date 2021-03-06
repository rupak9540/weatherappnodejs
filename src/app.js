const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;


const staticpath = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticpath));

// routing
app.get("/" , (req,res)=>{
    res.render("index");

});
app.get("/about" , (req,res)=>{
    res.render("about");

});
app.get("/weather" , (req,res)=>{
    res.render("weather");

});
app.get("*" , (req,res)=>{
    res.render('404error',{
        errorMsg : 'Oops! Page Not Found'
    })

});

// app.listen(port , ()=>{
//     console.log(`Listing on the port at ${port}`);
// });
app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
