const getJ03 = "SELECT * FROM j03_nomin_clienti"
const getJ03ById = "SELECT * FROM j03_nomin_clienti WHERE j03 = $1"
const addJ03 = "INSERT INTO j03_nomin_clienti (j03,nomin,plva,cfisc,nomcitta,nomcap,nomindirizzo,nomprov,nomnote,codident,pec) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"
const removeJ03 = "DELETE FROM j03_nomin_clienti WHERE j03 = $1"
const updateJ03 = "UPDATE j03_nomin_clienti SET nomin = $1, plva = $2, cfisc = $3, nomcitta = $4, nomcap = $5, nomindirizzo = $6, nomprov = $7, nomnote = $8, codident = $9, pec = $10 WHERE j03 = $11";

module.exports = {
    getJ03,
    getJ03ById,
    addJ03,
    removeJ03,
    updateJ03
}