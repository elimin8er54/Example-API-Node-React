const properties = require("../controllers/property.controller");
const { authJwt } = require("../middleware");
export { };

module.exports = (app) => {
  app.post("/properties/search", authJwt.verifyToken, properties.findAllSearch);
  // Create a new Property
  app.post("/api/properties", properties.create);

  // Retrieve all Property
  app.get("/api/properties", properties.findAll);

  // Retrieve a single Property with propertyId
  app.get("/api/properties/:propertyId", properties.findOne);

  // Update a Property with propertyId
  app.patch("/api/properties/:propertyId", properties.update);

  // Delete a Property with propertyId
  app.delete("/api/properties/:propertyId", properties.delete);

  // Delete all Property
  //  app.delete("/api/properties", properties.deleteAll);


};
