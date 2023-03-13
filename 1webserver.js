const http = require('http');
const server = http.createServer();
server.on("request",(req, res) => {
  req.on("error", (err) => {
    console.log(err.stack)
    res.writeHead(403,["Content-Type","text","connection","failed"])
    res.write("Failed connection!")
    res.end()
  });
  const {method,url,headers,} = req;
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  }).on("end", () => {
  console.log(body);
  })
  res.writeHead(200,["Content-Tyype","text","connection","success"])
  const responseBody = {method, url, headers};
  res.write(JSON.stringify(responseBody));
  res.end(); 
})
// 

server.listen(3000)