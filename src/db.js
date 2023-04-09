import {createPool} from 'mysql2/promise';
import {Sequelize} from 'sequelize';

export const sequelize=new Sequelized(  )
export const pool=createPool(
    {
        host:'localhost',
        user:'root',
        password:'adjsfbq5',
        port:'3306',
        database:'classicmodels'
    }
)


