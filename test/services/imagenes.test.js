const assert = require('assert');
const app = require('../../src/app');

describe('\'imagenes\' service', () => {
  it('registered the service', () => {
    const service = app.service('imagenes');

    assert.ok(service, 'Registered the service');
  });
});
