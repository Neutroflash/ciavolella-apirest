const getPostgres = "SELECT * FROM j01_comm"
const getPostgresById = "SELECT * FROM j01_comm WHERE j01 = $1"
const addPostgres = 
"INSERT INTO j01_comm (j01,j03,j04,j1impiva,j1rif_offer,j1rif_client,j1dat,j1titol,j1note,j1fat_1,j1fat_1_rif,j1fat_2,j1fat_2_rif,j1fat_3,j1fat_3_rif,j1tot_fat,sel,link_ordine,j1_avanz,j1_av_data) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)"

const removePostgres = "DELETE FROM j01_comm WHERE j01 = $1"
const updatePostgres = "UPDATE j01_comm SET j03 = $1, j04 = $2, j1impiva = $3, j1rif_offer = $4, j1rif_client = $5, j1dat = $6, j1titol = $7, j1note = $8, j1fat_1 = $9, j1fat_1_rif = $10, j1fat_2 = $11, j1fat_2_rif = $12, j1fat_3 = $13, j1fat_3_rif = $14, j1tot_fat = $15, sel = $16, link_ordine = $17, j1_avanz = $18, j1_av_data = $19 WHERE j01 = $20"

module.exports = {
    getPostgres,
    getPostgresById,
    addPostgres,
    removePostgres,
    updatePostgres
}