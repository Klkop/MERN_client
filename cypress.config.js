//here how e2e should work
const {defineConfig}=require('cypress')
module.exports=defineConfig({
    e2e:{
        baseUrl:'http://localhost:3000',
        setupNodeEvents(on,config){

        }
    }
});