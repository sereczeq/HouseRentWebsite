import {QueryResult} from "pg";

require('dotenv').config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");

import {Request, Response} from "express"

const app = express();

//middleware
app.use(cors());
app.use(express.json());
//

interface Person
{
    id_address : string,
    first_name : string,
    surname : string,
    age : number | null,
    budget : number | null,
}

const insertPersonQuery = 'INSERT INTO person (id_address, first_name, surname, age, budget) VALUES ($1, $2, $3, $4, $5) RETURNING *'

app.post("/person", async (req : Request, res: Response) => {

    const {id_address, first_name, surname, age, budget} : Person = req.body;
    pool.query(insertPersonQuery, [id_address, first_name, surname, age, budget])
        .then((queryResult: QueryResult) => {
            res.json(queryResult.rows)
        })
        .catch((err : Error) => {
            console.error(err.message)
        });
})


let port = process.env.PORT
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})