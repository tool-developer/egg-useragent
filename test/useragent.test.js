'use strict';

const mock = require('egg-mock');

describe('test/useragent.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/useragent-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, node-superagent/3.8.3')
      .expect(200);
  });
});
