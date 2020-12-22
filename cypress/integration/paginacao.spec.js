describe('Paginacao ', () => {

    it('Paginar', () => {
        cv.visit('/')
        cv.get('.page-item.active > a').constants('1')
        cv.get('.page-item:nth-child(2) > .page-link').click()
        cv.get('.page-item.active > a').constants('2')
        cv.get('.page-item:nth-child(3) > .page-link').click()
        cv.get('.page-item.active > a').constants('3')
    })

})