const users = require('../Models/werepModel')

//register:
userRegister = async (req, res) => {
    const { uname, mobile, psw } = req.body;


    try {
        const preUser = await users.findOne({ uname })
        if (preUser) {
            res.status(403).json("user is already present")
        }
        else {
            const newUser = new users({ uname, mobile, psw, booking: [] })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(400).json(err)
    }
}
//login:
userLogin = async (req, res) => {
    const { uname, psw } = req.body
    try {
        const user = await users.findOne({ uname, psw })
        if (user) {
            res.status(200).json("Login Successfull")
        }
        else {
            res.status(404).json("invalid Login Details")
        }
    }
    catch (err) {
        res.status(400).json(err)
    }

}
//booking:
booking = async (req, res) => {

    const { uname, psw, location, service } = req.body
    try {
        const user = await users.findOne({ uname, psw })
        if (user) {
            if (user.booking.length == 0) {
                user.booking.push({ location, service })
                await user.save()
                res.status(200).json("booking completed")
            }
            else {
                res.status(501).json('you have booked a slot')
            }
        }
        else {
            res.status(404).json("invalid user credentials")
        }
    }
    catch {

    }
}
//get booking details:
bookingDetails = async (req, res) => {
    const { uname } = req.params
    const user = await users.findOne({ uname })
    if (user) {
        if (user.booking.length == 0) {
            res.status(403).json("no bookings found")
        }
        else {
            res.status(200).json(user.booking)
        }
    }
    else {
        res.status(404).json("no user found")
    }
}
//cancel booking details:
cancelBooking = async (req, res) => {
    const { uname } = req.params;
    const user = await users.findOne({ uname })
    if (user.booking.length == 0) {
        res.status(403).json("no bookings found")
    }
    else {
        user.booking = []
        await user.save()
        res.status(200).json("booking is canceled")
    }
}
//delete account:
deleteAccount = async (req, res) => {
    const { uname } = req.params;
    try {
        const user = await users.deleteOne({ uname })
        res.status(200).json("account has beeen removed")
    }
    catch (err) {
        res.status(403).json(err)
    }

}
module.exports = { userRegister, userLogin, booking, bookingDetails, cancelBooking,deleteAccount }