describe('百度', () => {
    it('能搜索acfun', () => {
        cy.visit('https://baidu.com')
        cy.get('input#kw').type('acfun')
        cy.contains('百度一下').click()
        cy.contains('acfun').should('exist')
        cy.contains('www.acfun.cn').should('exist')
    });
});