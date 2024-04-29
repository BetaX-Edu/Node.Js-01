const http = require('http');

const handleRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
};

const server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});