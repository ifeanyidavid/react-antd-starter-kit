import http from 'http';
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import webpackConfig from './../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
const compiler = webpack(webpackConfig);
import webpackHotMiddleware from 'webpack-hot-middleware';

let app = express();
const server = http.createServer(app);

app.use(cors());

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);

app.use(express.static('dist'));
app.use(express.static('dist/css'));

const port = 9000;

server.listen(port, () => {
  console.info(`App is listening on port ${port}.`);
});
