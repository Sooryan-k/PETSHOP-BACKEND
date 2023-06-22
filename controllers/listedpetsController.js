//import listed pets collection
const listedpetsdetails=require('../models/listedpetsSchema')


//add to your listed pets

exports.addtopetlist=async(req,res)=>{

    const {id,category,image,breed,price,location}=req.body

    try{
        
        const item=await listedpetsdetails.findOne({id})
        if(item){
            res.status(403).json("Pet id already exists,Try different id")
        }
        else{
            
            const newPet=new listedpetsdetails({id,category,image,breed,price,location})
            
            await newPet.save()
            res.status(200).json("Pet added to the marketplace")
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}

// get listed pet data-
exports.getlisteditems=async(req,res)=>{
    try{
        
        const allpetItems=await listedpetsdetails.find()
        res.status(200).json(allpetItems)

    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove listed items
exports.removelisteditems=async(req,res)=>{
    
    const {id}=req.params
    try{
        const removelisteditem=await listedpetsdetails.deleteOne({id})

        if(removelisteditem){
            const allPetlists=await listedpetsdetails.find()
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

