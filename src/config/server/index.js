const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient()

app.use(express.json())

const PORT = process.env.PORT || 8080;

app.get('/users', async(req,res) => {
    const users = await prisma.user.findMany();
    return res.status(200).json({
        error:false,
        message:"ok",
        users});
})

app.post('/user', async (req,res) => {
    const { name, email, password, photo } = req.body;
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
            photo: 'https://github.com/RianLimeira.png'
        }
    })
    return res.status(200).json({
        error: false,
        message: 'User created',
        user
    })
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));