module.exports = {
  HOST: "dpg-chjni8rhp8u4bds0j7i0-a", // Usually does not need updating
  USER: "alexjora", // This is default username
  PASSWORD: "JTkBWgUsLQZMxsXkgFwbIKLIjFxrvWz8", // You might have to set password for this 
  DB: "logindb", // The DB we created in Prerequisites section
  dialect: "postgres", // to tell Sequelize that we are using PostgreSQL
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};