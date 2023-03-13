const RegisteredUser = require('../models/RegisterForm')

exports.addUser = async (req, res, next) => {
    console.log("entered");
    try {
        const { username, email, phone, dob } = req.body

        const newUser = await RegisteredUser.create({username, email, phone, dob});

        newUser.save();
        return res.status(201).json({
            success: true,
            data: newUser
        })
    } catch (err) {
        next(err)
    }
}

exports.getUsers = (req, res, next) => {
    RegisteredUser.find()
    .then(data => {
        return res.status(200).json(data);
    }).catch(err => {
        console.log(err);
    })
}