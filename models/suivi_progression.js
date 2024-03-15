// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize'
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'
const suivi_progresssion = sequelize.define('suivi_progression',{
    id_progression:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    Nom_utilisateur:{type:DataTypes.STRING, allowNull: false},
    mesures_physiques:{type:DataTypes.STRING, allowNull:false},
    objectif:{type:DataTypes.STRING, allowNull:false},
    progres:{type:DataTypes.STRING, allowNull:false}
 })
export default suivi_progresssion;