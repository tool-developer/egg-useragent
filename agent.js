'use strict';

const useragent = require('@tool-developer/koa-useragent');

module.exports = app => {
  //
  if (app.config.useragent.enable) {
    //
    app.use(useragent);
  }
};
