describe('Cypress Test Isolation', {testIsolation:false}, () => {
    it('Dosya yukleme - 1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath: "photo.jpg"}, {subjectType: 'drag-n-drop'})
        cy.wait(1500)
    });

    it('Dosya yukleme - 2', () => {
        const fileName = 'aslan.jpg'
        cy.fixture('aslan.jpg')
        .then(Cypress.Blob.base64StringToBlob)//convert islemi icin
        .then((fileContent) => {
            cy.get('.logo-preview').attachFile(
                {fileContent, fileName, mimeType: 'image/**'}, {subjectType: 'drag-n-drop'}
            )
        })
    });
});