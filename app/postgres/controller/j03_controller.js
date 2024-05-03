const pool = require("../../db");
const queries = require("../queries/j03_queries");

const getJ03 = (req, res) => {
  const { start, end, orderBy } = req.query;
  let query = queries.getJ03;

  if (start && end) {
    query += ` WHERE j03 BETWEEN ${start} AND ${end}`;
  }

  if (orderBy) {
    query += ` ORDER BY j03 ${orderBy.toUpperCase()}`;
  } else {
    // Orden por defecto si no se especifica ningún orderBy
    query += ` ORDER BY j03 ASC`;
  }

  pool.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    const rowCount = results.rows.length;
    res.set({
      "Access-Control-Expose-Headers": "Content-Range",
      "Content-Range": `X-Total-Count: ${rowCount}`,
    });
    res.status(200).json(results.rows);
  });
};

const getJ03ById = (req, res) => {
  const id = req.params.id;
  pool.query(queries.getJ03ById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addJ03 = (req, res) => {
  const {
    j03,
    nomin,
    plva,
    cfisc,
    nomcitta,
    nomcap,
    nomindirizzo,
    nomprov,
    nomnote,
    codident,
    pec,
  } = req.body;

  pool.query(
    queries.addJ03,
    [
      j03,
      nomin,
      plva,
      cfisc,
      nomcitta,
      nomcap,
      nomindirizzo,
      nomprov,
      nomnote,
      codident,
      pec,
    ],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("New data for table j03 created!");
    }
  );
};

const removeJ03 = (req, res) => {
  const id = req.params.id;
  pool.query(queries.removeJ03, [id], (error, results) => {
    if (error) throw error;
    if (results.rowCount === 0) {
      res.status(404).send("No se encontró el registro en la base de datos");
      return;
    }
    res.status(200).send("Datos de J03 eliminados exitosamente");
  });
};

const updateJ03 = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    nomin,
    plva,
    cfisc,
    nomcitta,
    nomcap,
    nomindirizzo,
    nomprov,
    nomnote,
    codident,
    pec,
  } = req.body;

  pool.query(queries.getJ03ById, [id], (error, results) => {
    const noJ03Found = !results.rows.length;
    if (noJ03Found) {
      res.send("The data doesn't exits in the database");
    }

    pool.query(
      queries.updateJ03,
      [
        nomin,
        plva,
        cfisc,
        nomcitta,
        nomcap,
        nomindirizzo,
        nomprov,
        nomnote,
        codident,
        pec,
        id,
      ],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("J03 data updated successfully");
      }
    );
  });
};

module.exports = {
  getJ03,
  getJ03ById,
  addJ03,
  removeJ03,
  updateJ03,
};
