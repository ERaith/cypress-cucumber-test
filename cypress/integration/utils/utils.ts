export const testLinks = (expected:number):void => {
    cy.get("a[href]").not('[href=""]').not("[href*='mailto:']").each(el => {
        const link = el.prop('href')
        cy.request({
          url: link,
          failOnStatusCode: false
        }).then(response => {
          cy.log(link)
          expect(response.status).to.eq(expected)
        })
    })
}

export const spyOnConsoleVisit = (path:strig):void => {
    cy.visit(path,{
        onBeforeLoad(win){
            cy.spy(win.console,'error').as('error')
        },
        failOnStatusCode:false
    });
}

export const checkForConsoleErrors = (expected:number):void => {
    cy.get('@error').its('callCount').should('eq', 0)
}
