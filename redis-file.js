'use strict';

const env           = require('./server/config/env').env;
const redisUrl      = process.env.REDIS_URL;
//const redisUrl      = 'redis://h:p28a021023e30599f0c8313c7a718f5df2da5118cd3b5fac5fa56d1c849bc020f@ec2-35-174-134-181.compute-1.amazonaws.com:16639'
const redisClient   = require('redis').createClient(redisUrl);


redisClient.on('connect', (err) => {
  console.log('connected to redis successfully');
});

redisClient.on('error', (err) => {
  console.log('error connecting to redis');
});


let fileConfig;
try {
  fileConfig = require('./server/config/redis.json')[env];
} catch(e) {
  if (!redisUrl) {
    throw new Error(
      `No redis config found at server/config/redis.json for ${env}`
    );
  }
}
let config;

if(!redisUrl) {
  config = {
    client: redisClient,
    port: fileConfig.port,
    host: fileConfig.host,
    db: 1,
    ttl: 360
  };
}
else {
  console.log(redisUrl);
  config = {
    client: redisClient,
    url: redisUrl,
    ttl: 360,
    db: 1,
    logErrors: true
  };
}

console.log('config file for redis store: ');
console.log(config)

//module.exports = config;

module.exports = {client: redisClient}