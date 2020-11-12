const Property = require("../models/property.model.js");

// Create and Save a new Property
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Save Property in the database
  Property.create(new Property(req.body), (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while signing in.",
      });
    } else res.json(data);
  });
};

// Retrieve all Property from the database.

exports.findAll = (req, res) => {
  Property.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving properties.",
      });
    } else res.json(data);
  });
};

// Find a single Proeprty with a propertyId
exports.findOne = (req, res) => {
  Property.findById(req.params.propertyId, (err, data) => {

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Property with id ${req.params.propertyId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Property with id ${req.params.propertyId}`,
        });
      }
    } else {
      res.json(data);
    }



  });
};

// Update a Property identified by the propertyId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Property.updateById(
    req.params.propertyId,
    new Property(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Property with id ${req.params.propertyId}.`,
          });
        } else {
          res.status(500).send({
            message: `Error updating Property with id ${req.params.propertyId}`,
          });
        }
      } else res.json(data);
    }
  );
};

// Delete a Property  with the specified propertyId in the request
exports.delete = (req, res) => {
  Property.remove(req.params.propertyId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Property with id ${req.params.propertyId}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete Property with id ${req.params.propertyId}`,
        });
      }
    } else res.json({ message: "Property was deleted successfully!" });
  });
};

// Delete all Property from the database.
exports.deleteAll = (req, res) => {
  Property.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all properties.",
      });
    } else res.send({ message: "All Properties were deleted successfully!" });
  });
};


// Get properties for search page
exports.findAllSearch = (req, res) => {
  Property.getAllSearch(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving properties.",
      });
    } else res.json(data);
  });
};
