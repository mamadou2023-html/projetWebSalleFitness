// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize'
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'

const alimentation = sequelize.define('alimentation',{
    id_alimentation:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    repas:{type:DataTypes.STRING, allowNull:false},
    valeur_nutritionnelle:{type:DataTypes.STRING, allowNull:false}

})
 export default alimentation