import redisClient from './utils/redis';

(async () => {
  console.log(redisClient.isAlive()); // true if connected
  console.log(await redisClient.get('myKey')); // null if not set
  await redisClient.set('myKey', 12, 5); // Set key with value 12 and expiration of 5 seconds
  console.log(await redisClient.get('myKey')); // 12

  // Wait for 10 seconds and check the value again
  setTimeout(async () => {
    console.log(await redisClient.get('myKey')); // null as it has expired
  }, 1000 * 10);
})();
