/*var jsonServer = require('json-server');

var router = jsonServer.router('C:\Users\mnishthla\Desktop\DB2Json\DB2Json\db.json'); // <- use a file path here
var server = jsonServer.create();
server.use(jsonServer.defaults); 
server.use(router);
server.listen(3005);
*/



const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('C:\Users\mnishthla\Desktop\DB2Json\DB2Json\db.json')
const middlewares = jsonServer.defaults()
 
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
 
// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})
 
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})
 
// Use default router
server.use(router)
server.listen(3005, () => {
  console.log('JSON Server is running')
})