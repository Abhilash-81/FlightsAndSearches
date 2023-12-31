const { City } = require("../models/index");

const { Op } = require("sequelize");
class cityRespository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }
  async deleteCity(city_id) {
    try {
      const city = await City.destroy({
        where: {
          id: city_id,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async getAllCities(filter) {
    //filter can also be empty
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }
}

module.exports = cityRespository;
