const properties = require("../src/server/controllers/property.controller.ts");
const sql = require("../src/server/models/db.ts");
//import "regenerator-runtime/runtime";

let mockRequest = () => {
  const req = {}
  req.body = {}
  req.params = {}
  return req
}

afterAll(() => {
  sql.end();
});

it("should 200 and return correct value", (done) => {
  let req = mockRequest();
  req.params.propertyId = 15;

  const res = {
    json: jest.fn(() => {
      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json.mock.calls.length).toBe(1);
      done();
    }),
  }

  properties.findOne(req, res);

});

it("should 404 and return correct value", (done) => {
  let req = mockRequest();
  req.params.propertyId = 16;
  const sendMock = jest.fn(() => {
    expect(sendMock).toHaveBeenCalledWith({ message: `Not found Property with id ${req.params.propertyId}.` });
    expect(sendMock).toBeDefined();
    expect(statusMock).toBeDefined();
    expect(statusMock).toHaveBeenCalledWith(404);


    done();
  }

  );
  const statusMock = jest.fn(() => {
    return { send: sendMock }

  });
  const res = {
    status: statusMock,

  }
  properties.findOne(req, res);

});

