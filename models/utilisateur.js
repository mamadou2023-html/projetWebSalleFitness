// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize';
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'

const utilisateur =sequelize.define('utilisateur',{
    id_utilisateur:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nom:{type:DataTypes.STRING, allowNull:false},
    prenom:{type:DataTypes.STRING, allowNull:false},
    naissance:{type:DataTypes.DATEONLY, allowNull:false},
    photo:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false},
    mot_passe:{type:DataTypes.STRING, allowNull:false}
})
export default utilisateur