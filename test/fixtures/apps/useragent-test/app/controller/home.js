'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.ctx.request.headers['user-agent'];
  }
}

module.exports = HomeController;
