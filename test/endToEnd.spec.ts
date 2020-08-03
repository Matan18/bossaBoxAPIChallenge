import supertest from "supertest";
import app from "../src/shared/app";

test('to see if 2 is equal to 1+1', () => {
  expect(2).toEqual(1 + 1);
})

test('connect', async (done) => {
  supertest(app).get('/tools').expect(response => {
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
      title:'notion'
    })]))
  })
  done();
})
