/// <reference types="cypress" />

describe('Todo App', () => {
  it('User can add todo in list', () => {
    cy.visit('https://example.cypress.io/todo')
    const message = "i want learn cypress"
    cy.get('[data-test="new-todo"]').type(`${message}{enter}`)
    cy.contains(message)
    cy.get('.todo-list li').contains(message)
  })
})