//import wishlist collection
const wishlists=require('../models/wishlistSchema')


//add to wishlist logic

exports.addtowishlist=async(req,res)=>{

    const {id,category,image,breed,price,location}=req.body

    try{
        
        const item=await wishlists.findOne({id})
        if(item){
            res.status(403).json("Pet already exists in wishlist")
        }
        else{
            
            const newPet=new wishlists({id,category,image,breed,price,location})
            
            await newPet.save()
            res.status(200).json("Pet added to the wishlist")
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}
// get wishlist data-logic
exports.getwishlistitems=async(req,res)=>{
    //logic
    try{
        //get all wishlist items from the mongodb
        const allWishlistItems=await wishlists.find()
        res.status(200).json(allWishlistItems)

    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove wishlist items
exports.removewishlistitems=async(req,res)=>{
    //get id from the request
    const {id}=req.params
    try{
        const removewishlistitem=await wishlists.deleteOne({id})

        if(removewishlistitem){
            //get all wishlist item after removing particular wishlist item
            const allWishlists=await wishlists.find()//remaining wishlist items
            res.status(200).json(allWishlists)

        }
        else{
            res.status(404).json("Pet not found")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}