const pool = require("../../db");
const queries = require("../queries/j02_queries");

const getJ02 = (req, res) => {
  const { start, end, orderBy } = req.query;
  let query = queries.getJ02;

  if (start && end) {
    query += ` WHERE j02 BETWEEN ${start} AND ${end}`;
  }

  if (orderBy) {
    query += ` ORDER BY j02 ${orderBy.toUpperCase()}`;
  } else {
    // Orden por defecto si no se especifica ningún orderBy
    query += ` ORDER BY j02 ASC`;
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

const getJ02ById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getJ02ById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addJ02 = (req, res) => {
  const {
    j02,
    j2num,
    j2dat,
    j01,
    j03,
    j04,
    j2preset,
    j2imp,
    j2pcnpaia,
    j2cnpaia,
    j2impiva,
    j2piva,
    j2iva,
    j2tot,
    j2note,
    j2_data_saldo,
    pag_saldo,
    j2_incas_1,
    j2_incas_2,
    j2_incas_3,
    j2_incassato,
    j2_da_incassare,
    ordid,
    j2_dat_inc_1,
    j2_dat_inc_2,
    j2_dat_pag_contr,
    previs,
  } = req.body;

  pool.query(
    queries.addJ02,
    [
      j02,
      j2num,
      j2dat,
      j01,
      j03,
      j04,
      j2preset,
      j2imp,
      j2pcnpaia,
      j2cnpaia,
      j2impiva,
      j2piva,
      j2iva,
      j2tot,
      j2note,
      j2_data_saldo,
      pag_saldo,
      j2_incas_1,
      j2_incas_2,
      j2_incas_3,
      j2_incassato,
      j2_da_incassare,
      ordid,
      j2_dat_inc_1,
      j2_dat_inc_2,
      j2_dat_pag_contr,
      previs,
    ],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("New data for table j02 created!");
    }
  );
};

const removeJ02 = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getJ02ById, [id], (error, results) => {
    const noJ02Found = !results.rows.length;
    if (noJ02Found) {
      res.send("This doesn't exist in the database, could not remove");
      return;
    }

    pool.query(queries.removeJ02, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("J02 data removed successfully");
    });
  });
};

const updateJ02 = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    j2num,
    j2dat,
    j01,
    j03,
    j04,
    j2preset,
    j2imp,
    j2pcnpaia,
    j2cnpaia,
    j2impiva,
    j2piva,
    j2iva,
    j2tot,
    j2note,
    j2_data_saldo,
    pag_saldo,
    j2_incas_1,
    j2_incas_2,
    j2_incas_3,
    j2_incassato,
    j2_da_incassare,
    ordid,
    j2_dat_inc_1,
    j2_dat_inc_2,
    j2_dat_pag_contr,
    previs,
  } = req.body;

  pool.query(queries.getJ02ById, [id], (error, results) => {
    const noJ02Found = !results.rows.length;
    if (noJ02Found) {
      res.send("The data doesn't exist in the database");
      return;
    }

    pool.query(
      queries.updateJ02,
      [
        j2num,
        j2dat,
        j01,
        j03,
        j04,
        j2preset,
        j2imp,
        j2pcnpaia,
        j2cnpaia,
        j2impiva,
        j2piva,
        j2iva,
        j2tot,
        j2note,
        j2_data_saldo,
        pag_saldo,
        j2_incas_1,
        j2_incas_2,
        j2_incas_3,
        j2_incassato,
        j2_da_incassare,
        ordid,
        j2_dat_inc_1,
        j2_dat_inc_2,
        j2_dat_pag_contr,
        previs,
        id,
      ],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("J02 data updated successfully");
      }
    );
  });
};

module.exports = {
  getJ02,
  getJ02ById,
  addJ02,
  removeJ02,
  updateJ02,
};
