describe('Locating Elements',function()
{
    it('Verify types of locators',function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
        cy.get(".button-1 search-box-button").click
        cy.get(".button-2 product-box-add-to-cart-button").click
        cy.get("#addtocart_4_EnteredQuantity").clear().type(2)
        cy.get("#add-to-cart-button-4").click

    })
})