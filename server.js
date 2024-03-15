// improtation des modules neccessaires pour le projet----------------------------------
import Express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'
// mes variables intermediares-------------------------------------------------
const server =Express()
const port =2000
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(helmet())
server.use(compression())
//connexion à  ma  base de donnée  -------------
import database from './connexion.js'
import abonnement from './routes/abonnementRoutes.js'
import alimentation from './routes/alimentationRoute.js'
import router from './routes/utilisateurRoutes.js'
import routerAbonnement from './routes/abonnementRoutes.js'
import routerAlimentation from './routes/alimentationRoute.js'
import routerContenu from './routes/contenuRoutes.js'
import authRoute from './routes/authentificationRoutes.js'
import routerRole from './routes/roleRoutes.js'
import routerSuiviPro from './routes/suiviRoute.js'
import routerEquipement from './routes/equipementRoute.js'
import routerProgramme from './routes/programmeRoute.js'

database.sync(
    {alter:true}
)
server
// 1 Utililisateur terminasion------------------------------------
    .use('/Utilisateurs',router)
// 2 Abonnement terminaison -------------------------------------------
    .use('/Abonnements', routerAbonnement)
// 3 Alimentation terminaison----------------------------
    .use('/Alimentations', routerAlimentation)
// 4 Contenu multi-media-------------------------------------
    .use('/Contenu_multi_media',routerContenu)
//authentification------------------------------
    .use('/login', authRoute)
// 5 Role---------------------
    .use ('/Role',routerRole)
// 6 Suivi de progression-------------------------------------
    .use('/SuiviProgression',routerSuiviPro)
//  7 Equipement-------------------------------------
    .use('/Equipement', routerEquipement)
// 8 Programme-------------------------------
    .use('/Programme', routerProgramme)

server.listen(port,() =>console.log('Notre application-Fitness tourne sur localhoost:'+port))
