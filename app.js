var fs = require("fs");

var http = require("http");

let timestamp = Date.now();

let dateObj = new Date(timestamp);

let date = dateObj.getDate();

let hour = dateObj.getHours();

const filename = `${date}-${hour}.txt`;

const createfile = () => {
  fs.writeFile(filename, `${timestamp}`, (err) => {
    if (err) throw err;
    console.log("file created");
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/createfile") {
    res.write("file created ");
    createfile();
  } 
  res.end();
});

server.listen(3001);
