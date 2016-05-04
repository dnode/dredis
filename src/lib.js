'use strict';

const redis = require('redis');

module.exports = (url) => {
  const client = redis.createClient(url);

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

  return client;
};
