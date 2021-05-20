const LoadProductsService = require('../services/LoadProductService')

module.exports = {
    
    async index(req, res){

        try {
            const allProducts = await LoadProductsService.load('products')
            const products = allProducts
            .filter((product, index) =>  index > 3 ? false : true)            
    
            return res.render("home/index", { products })
    
            
        } catch (error) {
            console.error(error)
        }
      
      

    }
}