const http = require("http");
const PORT = process.env.PORT || 3000;

const DB = require("./bootstrap/Db.js");

const server = http.createServer();

server.on("req", (req, res) => {

    switch (req.method) {

        case "GET":
            switch (req.url) {
                case "/users":
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.write(JSON.stringify(req.users));
                    res.end();
                    break;

                default:
                    res.statusCode = 404;
                    res.write(`File not found (get): ${req.url}`);
                    res.end()
            }
            break;

        case "POST":
            switch (req.url) {
                default:
                    res.statusCode = 404;
                    res.write(`File not found (post) ${req.url}`);
                    res.end()
            }
            break;

        case "PUT":
            switch (req.url) {
                default:
                    res.statusCode = 404;
                    res.write(`File not found (put) ${req.url}`);
                    res.end()
            }
            break;

        case "DELETE":
            switch (req.url) {
                default:
                    res.statusCode = 404;
                    res.write(`File not found (delete) ${req.url}`);
                    res.end()
            }
            break;

        default:
            res.statusCode = 405;
            res.write("Method not allowed");
            res.end();
    }
});

server.listen(PORT, err => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`)
});

const db = new DB();
db.connect();
db.test();
