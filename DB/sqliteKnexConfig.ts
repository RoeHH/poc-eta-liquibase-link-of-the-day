import { Knex, knex } from 'knex'

export const config: Knex.Config = {
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'postgres://yxzaexvs:ilgPbh7MnFH7eDBPGQ8amRrAG-XmkYES@tyke.db.elephantsql.com/yxzaexvs',
    user : 'yxzaexvs',
    password : 'ilgPbh7MnFH7eDBPGQ8amRrAG-XmkYES',
    database : 'test'
  }
};