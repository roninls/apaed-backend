console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL)
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  namingStrategy: new SnakeNamingStrategy(),
  "entities": [
    __dirname + '/**/models/*.{js,ts}'
  ],
  "migrations": [
    __dirname + '/**/database/migrations/*.{js,ts}'
  ],
  "cli": {
    "migrationsDir": [
      __dirname + '/**/database/migrations/'
     ],
     "entitiesDir": __dirname + '/**/models'
  }
};
