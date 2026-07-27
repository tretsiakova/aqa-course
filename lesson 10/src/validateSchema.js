const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErrors: true });
addFormats(ajv); // нужен для format: "date-time"

/**
 * Проверяет данные по JSON-схеме.
 * Если данные не соответствуют — тест падает с понятным описанием ошибок.
 *
 * Использование в тесте:
 *   expectToMatchSchema(response.data, bookSchema);
 */
function expectToMatchSchema(data, schema) {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    // Собираем ошибки ajv в читаемое сообщение
    const errors = validate.errors
      .map((e) => `${e.instancePath || "(root)"} ${e.message}`)
      .join("\n");
    throw new Error(`Response does not match JSON schema:\n${errors}`);
  }
}

module.exports = { expectToMatchSchema };
