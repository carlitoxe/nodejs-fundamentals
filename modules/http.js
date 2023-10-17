const http = require("http");

const router = (req, res) => {
    console.log("New request!");
    console.log(req.url);

    switch (req.url) {
        case '/hello':
            let greet = hello();
            res.write(greet);
            res.end();
            break;
            
        default: 
            res.write('Error 404: I dont know what you want');
            res.end();
    }   

    // res.writeHead(201, { 'Content-Type': 'text/plane' })
    // // Write response to the user
    // res.write('Hello World :D, I already know how to use HTTP of Node.js')

    // res.end();
}

http.createServer(router).listen(3000);

function hello() {
    return 'Hello, how are you doing?'
}

console.log('Listening http on port: 3000');
