const express = require("express");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
const app = express()

app.get('/', async (req, res) => {
    await prisma.people.create({
        data: {
            name: "Aluno Full"
        }
    })
    const peoples = await prisma.people.findMany()
    res.send(`
    <h1>Full Cycle Rocks!</h1>
    ${peoples.map((people) => {
        return "-" + people.name + "<br/>" 
    }).join('')}
    `)
})

app.listen(3000)