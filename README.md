[![Dependency Status](https://david-dm.org/dnode/dredis.svg)](https://david-dm.org/dnode/dredis)
[![devDependency Status](https://david-dm.org/dnode/dredis/dev-status.svg)](https://david-dm.org/dnode/dredis#info=devDependencies)

# Installation

`npm i --save dexpress`


# Initialisation

```javascript
const client = require('dredis')('url');
```


# Example
```javascript
await client.setJSON('key', 'value');
const value = await client.getJSON('key');
```
