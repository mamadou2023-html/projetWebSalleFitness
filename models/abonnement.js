// Importer les types de donnees
import { DataTypes, Sequelize, INTEGER } from 'sequelize'
//Importer la connexion a la base de donnees
import sequelize from '../connexion.js'
const Abonnement =sequelize.define('abonnemnet', {
        id_abonnement:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true},
        type_abonnement:{type: DataTypes.STRING, allowNull: true},
        duree:{type:DataTypes.INTEGER, allowNull: true},
        prix:{type:DataTypes.DOUBLE, allowNull: true},
})
    
export default Abonnement