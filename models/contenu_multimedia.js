// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize'
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'

const contenu_media =sequelize.define('contenu_media',{
    id_contenu_media:{type:DataTypes.INTEGER,autoIncrement:true, primaryKey:true},
    titre:{type:DataTypes.STRING,allowNull:false},
    type:{type:DataTypes.STRING,allowNull:false},
    auteur:{type:DataTypes.STRING,allowNull:false},
    duree:{type:DataTypes.INTEGER,allowNull:false},
    langue:{type:DataTypes.STRING,allowNull:false}
})
export default contenu_media