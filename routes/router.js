//To define routes for client request,create routes folder and router.js file

//import express
const express=require('express')

//import petsController
const petsController= require('../controllers/petsController')

//import wishlist controller
const wishlistsController=require('../controllers/wishlistController')

//import userController
const userController= require('../controllers/userController')

//import listedpetsController
const listedpetsController= require('../controllers/listedpetsController')


//using express create an object for router class in order to setup path
const router=new express.Router()


//api-getallpet request

router.get('/pets/all-pets',petsController.getallpets)

//api-add to petlist
router.post('/pets/all-pets',petsController.sellpet)

//api- get particular product
router.get('/pets/view-pet/:id',petsController.viewPet)

//api - Add pet to  wishlist 
router.post('/wishlist/add-to-wishlist',wishlistsController.addtowishlist)

//api- get wishlist product
router.get('/wishlist/get-wishlist',wishlistsController.getwishlistitems)

//api-remove wishlist item
router.delete('/wishlist/remove-wishlist-item/:id',wishlistsController.removewishlistitems)

//regandlogin
router.post('/user/register', userController.register);

router.post('/user', userController.login);

//api-add to your listed pet
router.post('/pets/listed-pets',listedpetsController.addtopetlist)

//api- get your listed pet
router.get('/listed-pets/get-listed-pets',listedpetsController.getlisteditems)

//api-remove your listed pet
router.delete('/listed-pets/remove-listed-item/:id',listedpetsController.removelisteditems)

//api-remove your listed pet from marketplace
router.delete('/all-pets/remove-listed-item/:id',petsController.removelisteditems)


//export router
module.exports=router