const pool = require("../../db");
const queries = require("../queries/j04_queries");

const getJ04 = (req, res) => {
  const { start, end, orderBy } = req.query;
  let query = queries.getJ04;

  if (start && end) {
    query += ` WHERE j04 BETWEEN ${start} AND ${end}`;
  }

  if (orderBy) {
    query += ` ORDER BY j04 ${orderBy.toUpperCase()}`;
  } else {
    // Orden por defecto si no se especifica ningún orderBy
    query += ` ORDER BY j04 ASC`;
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

const getJ04ById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getJ04ById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addJ04 = (req, res) => {
  const {
    j04,
    j03,
    cartnomold,
    cartref,
    cartrif,
    cartcoord,
    cartpag,
    cartdescr,
    cartdata,
    cartnote,
  } = req.body;

  pool.query(
    queries.addJ04,
    [
      j04,
      j03,
      cartnomold,
      cartref,
      cartrif,
      cartcoord,
      cartpag,
      cartdescr,
      cartdata,
      cartnote,
    ],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("New data for table j04 created!");
    }
  );
};

const removeJ04 = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getJ04ById, [id], (error, results) => {
    const noJ04Found = !results.rows.length;
    if (noJ04Found) {
      res.send("This doesn't exitst in the database, could not remove");
    }

    pool.query(queries.removeJ04, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("J04 data removed successfully");
    });
  });
};

const updateJ04 = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    j03,
    cartnomold,
    cartref,
    cartrif,
    cartcoord,
    cartpag,
    cartdescr,
    cartdata,
    cartnote,
  } = req.body;

  pool.query(queries.getJ04ById, [id], (error, results) => {
    const noJ04Found = !results.rows.length;
    if (noJ04Found) {
      res.send("The data doesn't exits in the database");
    }

    pool.query(
      queries.updateJ04,
      [
        j03,
        cartnomold,
        cartref,
        cartrif,
        cartcoord,
        cartpag,
        cartdescr,
        cartdata,
        cartnote,
        id,
      ],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("J04 data updated successfully");
      }
    );
  });
};

module.exports = {
  getJ04,
  getJ04ById,
  addJ04,
  removeJ04,
  updateJ04,
};
