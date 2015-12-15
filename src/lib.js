'use strict';

const redis = require('redis');

module.exports = (url) => {
  let client = redis.createClient(url);

  client.setJSON = (key, value, callback) => {
    value = JSON.stringify(value);
    client.set(key, value, callback);
  };

  client.getJSON = (key, callback) => {
    client.get(key, (err, value) => {
      if (value) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          err = e;
          value = undefined;
        }
      }
      callback(err, value);
    });
  };

  client.cache = (key, fallback, callback, expire) => {
    client.getJSON(key, (err, value) => {
      let hit = true;
      if (value) {
        if (callback(value, hit)) {
          hit = false;
        }
      } else {
        hit = false;
      }
      if (!hit) {
        fallback((value) => {
          callback(value);
          client.setJSON(key, value, () => {
            if (expire) {
              client.expire(key, expire);
            }
          });
        });
      }
    });
  };
};