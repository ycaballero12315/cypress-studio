# Cypress Login Test with Mockaroo Data

Este proyecto demuestra cómo automatizar pruebas de login utilizando [Cypress](https://www.cypress.io/) y datos aleatorios generados con [Mockaroo](https://mockaroo.com/).

## 🧪 Descripción

El test automatiza el proceso de login en `https://institutoweb.com.ar/elm/login.html`, utilizando un archivo JSON generado por Mockaroo que contiene múltiples usuarios de prueba.

## 📁 Estructura

- `cypress/fixtures/aleatory_user.json`: Datos de prueba generados con Mockaroo.
- `cypress/e2e/login.cy.js`: Script de prueba automatizada.

## 🚀 Ejecución

```bash
npx cypress open
