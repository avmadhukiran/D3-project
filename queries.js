const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getProductsbyday = (request, response) => {
    pool.query('select product_date, sum(product_onHandvalue) from products group by product_date order by product_date', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows)
    })
  }

const getProductsbyweek = (request, response) => {
    pool.query("SELECT date_trunc('week', product_date::date) AS weekly, sum(product_onHandvalue) FROM products GROUP BY weekly ORDER BY weekly;", (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getProductsbyday,
    getProductsbyweek
  }