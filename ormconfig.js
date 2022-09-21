console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL)
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  namingStrategy: new SnakeNamingStrategy(),
  "entities": [
    "dist/models/*.js"
  ],
  "migrations": [
    "dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": [
      "./src/database/migrations/"
     ],
     "entitiesDir": "src/models"
  }
};
