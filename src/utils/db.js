import sqlite3 from 'sqlite3'
import knex from 'knex'
import knexConfig from '../../knexfile'
const db = knex(knexConfig.development)

console.log('db', db)
module.exports = db
