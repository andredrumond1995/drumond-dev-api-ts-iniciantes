npx knex migrate:rollback --all && \
npx knex migrate:latest && \
npx knex seed:run

