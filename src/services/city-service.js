const {cityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository=new cityRepository();
    }
    async createCity(data){
        try {
            const city=await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            return {error};
        }
    }

    async deleteCity(city_id){
        try {
            const response=await this.cityRepository.deleteCity(city_id);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            return {error};
        }
    }

    async updateCity(city_id,data){
        try {
            const city=await this.cityRepository.updateCity(city_id,data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            return {error};
        }
    }

    async getCity(city_id){
        try {
            const city=await this.cityRepository.getCity(city_id);
            return city;
        } catch (error) {
            console.log("Something went wrong ");
            return {error};
        }
    }
}

module.exports=CityService;