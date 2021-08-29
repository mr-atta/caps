"use strict";

const events = require("../events");
const caps = require("../caps");

describe("testing the event ", () => {
  let consoleSpy;

  let data = {
    store: "aa store",
    orderID: 152866222,
    customer: "mohammad",
    address: "faker.address.streetAddress()",
  };

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  it("pickup", async () => {
    events.emit("pickup", data);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("in-transit ", async () => {
    events.emit("in-transit", data);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("delivered", async () => {
    events.emit("delivered", data);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });
});
