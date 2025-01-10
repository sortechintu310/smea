const astratoken = process.env.ASTRA_DB_APPLICATION_TOKEN;

const { DataAPIClient, Db, VectorizeDoc } = require("@datastax/astra-db-ts");

function connectToDatabase() {
  const { ASTRA_DB_API_ENDPOINT: endpoint, ASTRA_DB_APPLICATION_TOKEN: token } =
    process.env;

  if (!token || !endpoint) {
    throw new Error(
      "Environment variables ASTRA_DB_API_ENDPOINT and ASTRA_DB_APPLICATION_TOKEN must be defined."
    );
  }

  // Create an instance of the `DataAPIClient` class with your token.
  const client = new DataAPIClient(token);

  // Get the database specified by your endpoint.
  const database = client.db(endpoint);

  console.log(`Connected to database ${database.id}`);

  return { database, client };
}

module.exports = { connectToDatabase };
