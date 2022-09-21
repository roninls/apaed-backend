console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL)
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  namingStrategy: new SnakeNamingStrategy(),
  "entities": [
    "./src/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
};
