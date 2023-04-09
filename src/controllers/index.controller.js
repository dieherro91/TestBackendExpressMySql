import { pool } from "../db.js"


export const getPing=async (req,res)=>{
    const [result]=await pool.query('select * from customers c ;')
    res.json(result)
}