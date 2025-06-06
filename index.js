const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////
// FILES

// Blocking Synchronous Way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written');

// Non-blocking asynchronous Way
// fs.readFile('./txt/start.txt', 'utf-8' ,  (err,  data1) => {

    // if (err) return console.log('Error! :x')

    // s.readFile('./txt/${data1}.txt', 'utf-8' ,  (err,  data2) => {
    // console.log(data2);
    // fs.readFile('./txt/append.txt', 'utf-8' ,  (err,  data3) => {
    // console.log(data3);

    // fs.writeFile('.txt/final.txt', `${data2}\n${data2}` ,'utf-8', err => {
        // console.log('Your file has been written :)')
    // })
// });
// });
// });
// console.log('Will read file!');

//////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else ( pathName === '/api' ) {

        fs.readFile('./dev-data/data.json')
        res.end('API');
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8001, '127.0.0.1', () => {
    console.log('Listenting to requests on port 8001');
}); 
