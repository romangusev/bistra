var routes = {
  'GET': {},
  'POST': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
};

module.exports = {"route": route, "routes": routes, "get": get, "post": post};

function route(req, res){
  if(routes[req.method][req.url]){
    
    // Set methodes to be used on res object
    res.send = function(data) {
      for( var i = 0; i < 10000; i++ ) {
        var array = [];
        array.push(i + "dsgasdg,jansdgjkasbdgkjasbdgklajsdbglaksj");
      }
      // console.log(array);
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(data);
      return res.end();
    };
    res.json = function(data) {
      res.writeHead(200, {"Content-Type": "application/JSON"});
      res.write(data);
      return res.end();
    };
    

    routes[req.method][req.url](req, res);
    

    return;
  }
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("Sorry, page not found");
  return res.end();
}

function get(path, callback) {
  routes['GET'][path] = callback;
}

function post(path, callback) {
  routes['POST'][path] = callback;
}

function put(path, callback) {
  routes['PUT'][path] = callback;
}

function patch(path, callback) {
  routes['PATCH'][path] = callback;
}

function delete2(path, callback) {
  routes['DELETE'][path] = callback;
}
