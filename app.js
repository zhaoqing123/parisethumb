"use strict";
import Koa from 'koa';
import router from 'koa-simple-router';
import initController from './controller/initController';
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import Config from './config/config';
const app = new Koa();
initController.init(app,router);



app.context.render = co.wrap(render({
  root: Config.get('viewDir'),
  autoescape: true,
  cache: 'memory', 
  ext: 'html'
}));


app.use(serve(Config.get('staticDir')));
 
app.listen(Config.get('port'));
export default app;