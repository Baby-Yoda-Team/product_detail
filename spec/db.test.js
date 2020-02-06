const db = require('../db/index.js');

test('database should have 100 items on it', done => {
  function cb(data) {
    expect(data.length).toBe(100);
    done();
  }

  db.productDbData(cb);
});