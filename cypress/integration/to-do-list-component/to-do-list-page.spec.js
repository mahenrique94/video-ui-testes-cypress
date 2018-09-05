describe('To Do list UI', () => {

    it('Should return true when title component was correct', () => {
        cy.visit('/')

        cy.contains('To-Do List Component!').should('to.have.length', 1)
    })

    it('Should add a new task', () => {
        cy.visit('/')

        cy.get('[data-cy=input-task]').type('Nova tarefa')
        cy.get('[data-cy=btn-add]').click()

        cy.get('[data-cy=table-tasks-row]').should('to.have.length', 1)
        cy.contains('Nova tarefa').should('to.have.length', 1)
    })

    it('Should add a two tasks', () => {
        cy.visit('/')

        cy.get('[data-cy=input-task]').type('Nova tarefa')
        cy.get('[data-cy=btn-add]').click()

        cy.get('[data-cy=input-task]').type('Outra tarefa')
        cy.get('[data-cy=btn-add]').click()

        cy.get('[data-cy=table-tasks-row]').should('to.have.length', 2)
        cy.contains('Nova tarefa').should('to.have.length', 1)
        cy.contains('Outra tarefa').should('to.have.length', 1)
    })

})