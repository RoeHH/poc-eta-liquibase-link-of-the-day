export const db = require("knex")({
	client: "pg",
	connection: {
	  host: "localhost",
	  user: "postgres",
	  password: "",
	  database: "knex-test"
	}
  });