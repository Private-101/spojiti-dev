import { validateEmail, urlify } from "./utils";

test("validateEmail returns false for non-emails", () => {
  expect(validateEmail(undefined)).toBe(false);
  expect(validateEmail(null)).toBe(false);
  expect(validateEmail("")).toBe(false);
  expect(validateEmail("not-an-email")).toBe(false);
  expect(validateEmail("n@")).toBe(false);
});

test("validateEmail returns true for emails", () => {
  expect(validateEmail("kody@example.com")).toBe(true);
});

describe("Test Urlify basic functionality", () => {
  test("Urlify should parse an url with no query params", () => {
    let url = urlify("api.myapi.test");
    expect(url).toBeDefined();
    expect(url).toBe("api.myapi.test/");
  });

  test("Urlify should parse an url with no query params and empty uris", () => {
    let url = urlify("api.myapi.test", []);
    expect(url).toBeDefined();
    expect(url).toBe("api.myapi.test/");
  });

  test("Urlify should parse an url with no query params and one uri", () => {
    let url = urlify("api.myapi.test", "v1");
    expect(url).toBeDefined();
    expect(url).toBe("api.myapi.test/v1");
  });

  test("Urlify should parse an url with all fields", () => {
    let url = urlify(
      "api.myapi.test", // base url
      ["api", "v1", "pluto", "1"], // an array of additional uris
      { param1: "param1" } // an object of query params
    );

    expect(url).toBeDefined();
    expect(url).toBe("api.myapi.test/api/v1/pluto/1?param1=param1");
  });
});

describe("Test Urlify bad inputs", () => {
  test("Urlify should parse an url with all fields with too much ///", () => {
    let id = '1';
    let url = urlify(
      "api.myapi.test", // base url
      ["api/", "/v1/", "/pippo", id], // an array of additional uris
      { param1: "param1value" } // an object of query params
    );

    expect(url).toBeDefined();
    expect(url).toBe("api.myapi.test/api/v1/pippo/1?param1=param1value");
  });
});