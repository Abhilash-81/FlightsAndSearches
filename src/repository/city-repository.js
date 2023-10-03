
const {City}=require('./models/index');

class cityRespository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong at repository level");
            throw {error};
        }
    }
    async deleteCity(city_id){
        try{
           const city=await City.destroy({
            where:{
                id:city_id
            }
           }); 
           return true;
        }catch(error){
            console.log("Something went wrong at repository level");
            throw {error};
        }
    }
    async updateCity(city_id,data){
        try {
            const city=await City.update(data,{
                where:{
                    id:city_id
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong at repository level");
            return {error};
        }
    }

    async getCity(city_id){
        try {
            const city=await City.findByPk(city_id);
            return city;
        } catch (error) {
            console.log("Something went wrong at repository level");
            return {error};
        }
    }
}

module.exports=cityRespository;
