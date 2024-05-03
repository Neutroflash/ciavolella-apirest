const getJ02 = "SELECT * FROM j02_fat"
const getJ02ById = "SELECT * FROM j02_fat WHERE j02 = $1"
const addJ02 = "INSERT INTO j02_fat (j02,j2num,j2dat,j01,j03,j04,j2preset,j2imp,j2pcnpaia,j2cnpaia,j2impiva,j2piva,j2iva,j2tot,j2note,j2_data_saldo,pag_saldo,j2_incas_1,j2_incas_2,j2_incas_3,j2_incassato,j2_da_incassare,ordid,j2_dat_inc_1,j2_dat_inc_2,j2_dat_pag_contr,previs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27)"
const removeJ02 = "DELETE FROM j02_fat WHERE j02 = $1"
const updateJ02 = "UPDATE j02_fat SET j2num = $1 ,j2dat = $2, j01 = $3, j03 = $4, j04 = $5, j2preset = $6,j2imp = $7,j2pcnpaia = $8,j2cnpaia = $9,j2impiva = $10,j2piva = $11,j2iva = $12,j2tot = $13,j2note = $14,j2_data_saldo = $15,pag_saldo = $16,j2_incas_1 = $17,j2_incas_2 = $18,j2_incas_3 = $19,j2_incassato = $20,j2_da_incassare = $21,ordid = $22,j2_dat_inc_1 = $23,j2_dat_inc_2 = $24,j2_dat_pag_contr = $25,previs = $26 WHERE j02 = $27";

module.exports = {
    getJ02,
    getJ02ById,
    addJ02,
    removeJ02,
    updateJ02
}