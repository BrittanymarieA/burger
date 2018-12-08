var orm = require("./../config/orm");

// Import the ORM to create functions that will interact with the database.

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
 updateOne: function(id, cb){
   orm.updateOne("burgers", id, cb);
 },
  createOne: function(name, cb){
    orm.createOne("burgers", name, cb)
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
