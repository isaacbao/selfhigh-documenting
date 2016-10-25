const redis = require('redis')

//本地
const redisClient = redis.createClient()

//测试环境
// const redisClient = redis.createClient(6379,10.251.1.248)

//正式环境
// const redisClient = redis.createClient(6379,10.251.1.???)

module.export = redisClient
