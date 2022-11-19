const Catalog = require('../models/catalogmodel');
class CatalogControllers {
    
    async findAll(){
        try {
            return await Catalog.find();
        } catch (error) {
            throw error;
        }
    }
    
    async create(foto){
        try {
            return await Catalog.create(foto);
        } catch (error) {
            throw error;
        }        
    }

    async delete(id){
        try {
            return await Catalog.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    async update(id, foto){
        try {
            return await Catalog.findByIdAndUpdate(id, foto);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CatalogControllers;