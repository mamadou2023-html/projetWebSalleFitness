// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize'
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'
const programme =sequelize.define('pogramme',{
    id_programme:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nom:{type:DataTypes.STRING, allowNull:false},
    type_progamme:{type:DataTypes.STRING, allowNull:false},
    duree:{type:DataTypes.INTEGER, allowNull:false},
    tarif:{type:DataTypes.FLOAT, allowNull:false},
    entraineur:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.TEXT}
})
export default programme