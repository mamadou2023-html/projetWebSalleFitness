import alimentation from "../models/alimentation.js";
// ajout alimentation----------------------
export const addAlimentation =async(req, res) =>{
    const newAlimentation = req.body
    try {
       await  alimentation .create(newAlimentation)
       res.status(201).json({message: "Ajout reussi !"})
    }catch(error){res.status(201).json({ message: error.message })
}
}
// liste des alimentations ------------------------------------------
export const listAlimentation = async (req, res) =>{
    const lesAlimentations = await alimentation.findAll()
    res.status(200).json(lesAlimentations)
} 
// modification d'un abonnement -----------------
export const updateAliment =async (req, res) => {
       //L'information actuelle
       const { id_alimentation } = req.params
       //Validation de l'id
       if (!parseInt(id_alimentation)) return res.status(404).json({ message: "Cette alimentation n'existe pas" })
       const alimentmodif = await alimentation.findByPk(id_alimentation)
       //Nouvelle information
       const newAlimentation = req.body
       try {
           await alimentmodif .update(newAlimentation)
           res.status(201).json({ message: "Alimentation mise à jour avec success" })
   
       } catch (error) {
           res.status(400).json({ message: error.message + "ici" })
       }
}
// suppresion d'un aliment-----------------------------------
export const removeAliment = async (req, res) => {
    // recuperation de l'aliment à supprimer à travers son id
    const {id_alimentation} = req.params
    try {
        res.status(200).json("Aliment supprimé avec succés")
        await alimentation.destroy({where :{id_alimentation}})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}