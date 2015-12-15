[![Dependency Status](https://david-dm.org/dnode/dredis.svg)](https://david-dm.org/dnode/dredis)
[![devDependency Status](https://david-dm.org/dnode/dredis/dev-status.svg)](https://david-dm.org/dnode/dredis#info=devDependencies)

# Example
```javascript
let client = require('dredis')('url');
client.setJSON('key', 'value');
client.getJSON('key', (err, value) => {});
client.cache(
  'key',
  (callback) => { callback('value'); },
  (value) => {}
);
```
