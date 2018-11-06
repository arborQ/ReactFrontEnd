var webpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("../webpack.config.js");
var compiler = webpack(config);

var proxy = {
  target: {
    host: "localhost",
    protocol: "http",
    port: 5000
  },
  bypass: function(req) {
    console.log({ url: req.url });
  },
  onError: function() {
    console.log("error");
  },
  secure: false
};

// --bonjour --color --history-api-fallback --mode=development --port 1712

var server = new webpackDevServer(compiler, {
  bonjour: true,
  historyApiFallback: true,
  inline: true,
  proxy: {
    "/api": proxy
  }
});

server.listen(1712);

console.log("Webpack dev server listen: http://localhost:1712");
