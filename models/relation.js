//Import des models----------------------------------------------------------
import  utilisateur  from "./utilisateur.js";
import abonnement  from "./abonnement.js";
import contenu_media from "./contenu_multimedia.js";
import equipement  from "./equipement.js";
import programme from "./programme.js";
import role from "./role.js";
import  suivi_progresssion  from "./suivi_progression.js";
import alimentation from "./alimentation.js";
//Définition des relations entre les entités-------------------------------
utilisateur.hasMany(role )// hasMany ---> Utilisateur peut avoir un-à-plusieurs role
role.belongsTo(utilisateur) // belongsTo ---> un role est associé à un et un seul utilisateur
utilisateur.hasMany(abonnement) 
abonnement.belongsTo(utilisateur)
utilisateur.belongsTo(suivi_progresssion)
suivi_progresssion.belongsTo(utilisateur)
utilisateur.hasMany(programme)
abonnement .hasMany(contenu_media)
contenu_media.belongsTo(abonnement)
programme.hasOne(utilisateur)
equipement.hasOne(programme)
programme.hasMany(equipement)
alimentation.hasOne(programme)
programme.hasMany(alimentation)
export {utilisateur,contenu_media,abonnement,equipement,programme,role,suivi_progresssion}