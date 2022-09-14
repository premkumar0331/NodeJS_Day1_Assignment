var fs = require("fs");

var http = require("http");

const dirpath = __dirname;

const readfiles = () => {
  fs.readdir(dirpath, (err, files) => {
    if (err) {
      throw err;
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
};

// console.log(dirpath);

const server = http.createServer((req, res) => {
 if (req.url === "/files") {
    res.write("files listed");
    readfiles();
  }
  res.end();
});

server.listen(3001);
