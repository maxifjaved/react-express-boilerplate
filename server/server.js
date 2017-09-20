import path from 'path';
import webpack from 'webpack';
import express from 'express';
import config from '../webpack.config';

let app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../static')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (error) => error ? console.log(error) : console.log('Listening at http://localhost:3000/'));
