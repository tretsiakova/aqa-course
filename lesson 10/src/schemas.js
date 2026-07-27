/**
 * JSON-схемы — "контракт" API.
 * Мы проверяем не конкретные значения (они меняются),
 * а форму данных: какие поля есть и каких они типов.
 *
 * Схемы написаны по Swagger-модели Book и реальным ответам API.
 */

// Одна книга
const bookSchema = {
  type: "object",
  required: ["id", "title", "description", "pageCount", "excerpt", "publishDate"],
  properties: {
    id: { type: "integer" },
    title: { type: ["string", "null"] }, // API допускает null в строковых полях
    description: { type: ["string", "null"] },
    pageCount: { type: "integer" },
    excerpt: { type: ["string", "null"] },
    publishDate: { type: "string", format: "date-time" },
  },
  additionalProperties: false, // лишних полей быть не должно
};

// Список книг — массив объектов Book
const booksListSchema = {
  type: "array",
  items: bookSchema,
};

// Тело ошибки 400 (стандартный ASP.NET ProblemDetails)
const errorSchema = {
  type: "object",
  required: ["title", "status"],
  properties: {
    type: { type: "string" },
    title: { type: "string" },
    status: { type: "integer" },
    traceId: { type: "string" },
    errors: { type: "object" },
  },
};

module.exports = { bookSchema, booksListSchema, errorSchema };
