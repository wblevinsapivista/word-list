import { WordController } from "./WordController";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { faker } from "@faker-js/faker";

let datamuseSpy = jest.fn();
const singleWordResponse = { data: [{ word: "blah", score: 36368 }] };

const server = setupServer(
  rest.get(`https://api.datamuse.com/words`, (req, res, ctx) => {
    datamuseSpy();
    return res(
      ctx.status(200),
      ctx.set("Access-Control-Allow-Origin", "*"),
      ctx.json(singleWordResponse.data)
    );
  })
);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("searchWords", () => {
  beforeEach(() => {
    setupServer();
  });

  it("calls expected endpoint", async () => {
    const response = await WordController.searchWords("hello");

    expect(response.status).toEqual(200);

    expect(datamuseSpy).toHaveBeenCalled();
    expect(response).toEqual(expect.objectContaining(singleWordResponse));
  });
});
