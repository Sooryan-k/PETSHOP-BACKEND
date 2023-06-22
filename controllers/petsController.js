//import pets collection 
const petsdetails = require('../models/petsSchema')
const pets = require('../models/petsSchema')


//list a pet

exports.sellpet=async(req,res)=>{

    const {id,category,image,breed,price,age,description,location,contact_number}=req.body

    try{
        
        const item=await petsdetails.findOne({id})
        if(item){
            res.status(403).json("Pet id already exists,Try different id")
        }
        else{
            
            const newPet=new petsdetails({id,category,image,breed,price,age,description,location,contact_number})
            
            await newPet.save()
            res.status(200).json("Pet added to the marketplace")
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}


//remove listed pets from marketplace
exports.removelisteditems=async(req,res)=>{
    
    const {id}=req.params
    try{
        const removelisteditem=await petsdetails.deleteOne({id})

        if(removelisteditem){
            const allPetlists=await petsdetails.find()
            res.status(200).json(allPetlists)

        }
        else{
            res.status(404).json("Pet not found")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}




exports.getallpets= async(req,res)=>{
    //logic 
    try{
        const allPets=await pets.find()
        res.status(200).json(allPets)
    }
    catch(error){
        res.status(401).json(error)
    }
}


//view a particular pet

exports.viewPet=async (req,res)=>{

    const id = req.params.id
    //logic
    try{
        
        const pet = await pets.findOne({id})
        if(pet){
            res.status(200).json(pet)
        }
        else{
            res.status(404).json("Pet not found")
        }
    }
    catch(error){
        res.status(401).json(error)

    }

}
