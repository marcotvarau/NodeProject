import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  
  if(method === 'GET' && url === '/users') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users') {
    users.push({
      id:1,
      name: 'John Doe',
      email: "johndoe@example.com",  
    });
    res.writeHead(201).end();
  }


  return res.writeHead(404).end();
});

server.listen(3333)

