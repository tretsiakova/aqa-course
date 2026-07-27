const api = require("../src/api");
const { bookSchema, booksListSchema, errorSchema } = require("../src/schemas");
const { expectToMatchSchema } = require("../src/validateSchema");

//Получение всего списка книг
describe("GET /Books", () => {
  test("returns 200 and a list of books matching the schema", async () => {
    const response = await api.get("/Books");

    expect(response.status).toBe(200);
    expectToMatchSchema(response.data, booksListSchema);
    expect(response.data.length).toBeGreaterThan(0);
  });
});

//Получение книги по id + негативные кейсы
describe("GET /Books/{id}", () => {
  test("returns 200 and a book matching the schema for an existing id", async () => {
    const response = await api.get("/Books/1");

    expect(response.status).toBe(200);
    expectToMatchSchema(response.data, bookSchema);
    expect(response.data.id).toBe(1); // запросили id=1 — получили id=1
  });

  //Нет ресурса
  test("returns 404 for a non-existing id", async () => {
    const response = await api.get("/Books/99999");

    expect(response.status).toBe(404);
  });

  //Невалидный тип id
  test.each([["abc"], ["1.5"], ["!@#"]])(
    "returns 400 and a validation error for invalid id %p",
    async (invalidId) => {
      const response = await api.get(`/Books/${invalidId}`);

      expect(response.status).toBe(400);
      expectToMatchSchema(response.data, errorSchema);
    }
  );
});

//Создание книги + негативные кейсы
describe("POST /Books", () => {
  //Создание книги
  test("positive: creates a book — check status and book schema", async() => {
    const newBook = {
      "id": 1,
      "title": "Sample Book Title", 
      "description": "Sample Book Description", 
      "pageCount": 100, 
      "excerpt": "Sample Book Excerpt", 
      "publishDate": "2024-01-01T00:00:00Z"
    };

    const response = await api.post("/Books", newBook);
    
    expect(response.status).toBe(200);
    expectToMatchSchema(response.data, bookSchema); 
  });

  //Ошибка при создании книги (невалидное тело запроса)
  test("negative: invalid body returns 400 with validation error", async () => {
    const invalidBook = {
      "id": 1,
      "title": "Sample Book Title", 
      "description": "Sample Book Description", 
      "pageCount": "not-a-number", 
      "excerpt": "Sample Book Excerpt"
    };

    const response = await api.post("/Books", invalidBook);

    expect(response.status).toBe(400);
    expectToMatchSchema(response.data, errorSchema);
  });
});

//Обновление книги + негативные кейсы
describe("PUT /Books/{id}", () => {
  //Обновление данных существующей книги
  test("positive: updates a book — check status and book schema", async () => {
    const updateBook = {
      "id": 1,
      "title": "Updated Book Title",
      "publishDate": "2024-01-01T00:00:00Z"
    };

    const response = await api.put("/Books/1", updateBook);

    expect(response.status).toBe(200);
    expectToMatchSchema(response.data, bookSchema);
  });

  //Ошибка при обновлении данных книги, если указан невалидный id в URL
  test("negative: invalid id returns 400 with validation error", async () => {
    const updateBook = {
      "id": 1,
      "description": "Updated Book Description"
    };

    const response = await api.put("/Books/test", updateBook);

    expect(response.status).toBe(400);
    expectToMatchSchema(response.data, errorSchema);
  });

  //Ошибка при обновлении данных книги, если указанно невалидное тело
  test("negative: invalid body returns 400", async () => {
    const invalidUpdateBook = {
      "id": 1,
      "pageCount": "not-a-number"
    };

    const response = await api.put("/Books/1", invalidUpdateBook);

    expect(response.status).toBe(400);
    expectToMatchSchema(response.data, errorSchema);
  });
});

//Удаление книги + негативные кейсы
describe("DELETE /Books/{id}", () => {
  //Удаление книги
  test("positive: deletes a book — check status", async () => {
    const response = await api.delete("/Books/1");

    expect(response.status).toBe(200);
  });

  //Удаление несуществующего ресурса
  test("negative: invalid id returns 400 with validation error", async () => {
    const response = await api.delete("Books/test");

    expect(response.status).toBe(400);
    expectToMatchSchema(response.data,errorSchema);
  });
});
