var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:'rdvikki',
    database:'rdvikki',
    host:'db.imad.hasura-app.io/',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
var articles = { 
    'article1' : { 
    title: 'ArticleOne | Vigneshwari',
    heading: 'Article One',
    date: 'Sep 5 2016',
    content:` <p>This displays the content of article one.
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
              <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
              <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>`
},
    'article2' : {  
    title:'ArticleTwo| Vigneshwari',
    heading:'Article Two',
    date:'Oct 2 2016',
    content:` <p>This displays the content of article two.
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `},
    'article3' : { 
    title:'ArticleThree | Vigneshwari',
    heading:'Article Three',
    date:'Sep 5 2016',
    content:` <p>This displays the content of article three.
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            `}
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
<meta name="viewport" content="width-device-width" initial scale="1">
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
          <h1>${heading}</h1>
          <div>${date}</div> 
          <div>
              ${content}
          </div>    
          </div>
</body>
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


//create the pool somewhere globally so its lifetime
// lasts for as long as your app is running
var pool = new Pool(config); 
app.get('/test-db', function(req,res){
pool.query('SELECT * FROM test', function (err,result){
if(err){
  res.status(500).send(err.toString());
}
    else{
        res.send(JSON.stringify(result.rows));
}
});
});
var counter=0;
app.get('/counter', function(req,res)
{
    counter = counter + 1;
    res.send(counter.toString());
});
var names=[];
app.get('/submit-name', function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
 });
app.get('/:articleName', function (req, res){
    articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
//app.get('/ui/style.css', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
//});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/bootstrap.css', function (req,res){
    res.sendFile(path.join(_dirname, 'ui','bootstrap.css'));
});
app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/About.html', function (req,res){
    res.sendFile(path.join(_dirname, 'ui','About.html'));
});

app.get('/ui/bootstrap.js', function (req,res){
    res.sendFile(path.join(_dirname, 'ui','bootstrap.js'));
});
app.get('/ui/docs.css', function (req,res){
    res.sendFile(path.join(_dirname, 'ui','docs.css'));
});
app.get('/ui/jquery.js', function (req,res){
    res.sendFile(path.join(_dirname, 'ui','jquery.js'));
});
app.get('/ui/1S.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1S.jpg'));
});
app.get('/ui/2S.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2S.jpg'));
});
app.get('/ui/3S.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3S.jpg'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});