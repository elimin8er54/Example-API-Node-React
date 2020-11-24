const landlords = require("../controllers/landlord.controller");
import Express from 'express';
module.exports = (app: Express.Application) => {
  // Create a new Landlord
  app.post("/api/landlords", landlords.create);

  // Retrieve all Landlord
  app.get("/api/landlords", landlords.findAll);

  // Retrieve a single Landlord with landlordId
  app.get("/api/landlords/:landlordId", landlords.findOne);

  // Update a Landlord with landlordId
  app.patch("/api/landlords/:landlordId", landlords.update);

  // Delete a Landlord with landlordId
  app.delete("/api/landlords/:landlordId", landlords.delete);

  // Delete all Landlord
  //  app.delete("/api/landlords", landlords.deleteAll);
};

