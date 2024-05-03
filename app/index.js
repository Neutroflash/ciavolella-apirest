const express = require('express');
const cors = require('cors');
const postgresRoutes = require('./postgres/routes/routes');
const j03Routes = require('./postgres/routes/j03_routes');
const j04Routes = require('./postgres/routes/j04_routes');
const j02Routes = require('./postgres/routes/j02_routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/v1/postgres', postgresRoutes);
app.use('/api/v1/j03', j03Routes);
app.use('/api/v1/j04', j04Routes);
app.use('/api/v1/j02', j02Routes);

app.listen(port, () => console.log(`App listening on port ${port}`));