// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize'
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'
const Role = sequelize.define('role', {
    id_role:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nom: { type: DataTypes.STRING, allowNull: false },
})
export default Role

