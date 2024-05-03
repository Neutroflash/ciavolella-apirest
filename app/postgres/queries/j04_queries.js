const getJ04 = "SELECT * FROM j04_cartelle"
const getJ04ById = "SELECT * FROM j04_cartelle WHERE j04 = $1"
const addJ04 = "INSERT INTO j04_cartelle (j04,j03,cartnomold,cartref,cartrif,cartcoord,cartpag,cartdescr,cartdata,cartnote) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)"
const removeJ04 = "DELETE FROM j04_cartelle WHERE j04 = $1"
const updateJ04 = "UPDATE j04_cartelle SET j03 = $1, cartnomold = $2, cartref = $3, cartrif = $4, cartcoord = $5, cartpag = $6, cartdescr = $7, cartdata = $8, cartnote = $9 WHERE j04 = $10";

module.exports = {
    getJ04,
    getJ04ById,
    addJ04,
    removeJ04,
    updateJ04
}