const axios = require("axios");

/**
 * Общий HTTP-клиент для всех тестов.
 *
 * validateStatus: () => true — важный трюк для API-тестов:
 * axios по умолчанию бросает исключение на 4xx/5xx,
 * а нам нужно САМИМ проверять статус-код в expect().
 */
const api = axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net/api/v1",
  headers: { "Content-Type": "application/json" },
  validateStatus: () => true,
});

module.exports = api;
