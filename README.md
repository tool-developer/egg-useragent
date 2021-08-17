# egg-useragent
useragent plugin for egg

data about the browser UserAgent, like ua.desktop, ua.ios and so on.



## Install

```bash
$ npm i @tool-developer/egg-useragent --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.useragent = {
  enable: true,
  package: '@tool-developer/egg-useragent'
};
```

// {app_root}/controller/home.js
```js

class HomeController extends Controller{
  async index(){
    //
    this.ctx.body = JSON.stringify(this.ctx.useragent)
  }
}

module.exports = HomeController;

```
