const express=require('express')
const { userRegister, userLogin, booking, bookingDetails, cancelBooking, deleteAccount } = require('../Controllers/logic')
const router =new express.Router()

//register user
router.post('/users/register',userRegister)
//login
router.post('/users/login',userLogin)
//booking
router.post('/users/booking',booking)
//get booking details
router.get('/users/bookingdetails/:uname',bookingDetails)
//cancel booking:
router.post('/users/cancelbooking/:uname',cancelBooking)
//delete account:
router.delete('/users/deleteacc/:uname',deleteAccount)

module.exports=router