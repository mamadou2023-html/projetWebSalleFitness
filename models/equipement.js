// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize'
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'

const equipemment = sequelize.define('equipement',{
    id_equipement:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nom:{type:DataTypes.STRING, allowNull:false},
    categorie:{type:DataTypes.STRING,allowNull:false},
    etat:{type:DataTypes.STRING, allowNull:false},
})
export default equipemment;