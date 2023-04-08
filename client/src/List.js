import * as React from 'react';
import { useEffect, useState } from 'react';
import { getAllCitizens } from './http/citizenAPI';
import { getAllCities } from './http/cityAPI';
import ListItemRender from './ListItemRender';


const List = () => {
  const [citizens, setCitizens] = useState([]);
  const [cities, setCities] = useState([]);
  const [info, setInfo] = useState([]);

  const getCitizens = async() => {
    const citizens = await getAllCitizens();
    return citizens;
  };

  const getCities = async() => {
    const cities = await getAllCities();
    return cities;
  };

  const getInfo = () => {
    if (citizens.length !== 0 && cities.length !== 0) {
      const values = {};
      cities.map(({ name, data, city_id }) => {
        values[name] = {
          data,
          city_id,
          districts: {},
        };
        citizens.map((citizen) => {
          if (city_id === citizen.city_id) {
            if (!(citizen.district in values[name].districts)) {
              values[name].districts[citizen.district] = [];
            }
            if (!values[name].districts[citizen.district][citizen.street]) {
              values[name].districts[citizen.district][citizen.street] = [];
            }
            values[name].districts[citizen.district][citizen.street].push(citizen.name);
          }
        });
      });
      return values;
    }
  };

  useEffect(() => {
    getCitizens().then((citizens) => setCitizens(citizens));
    getCities().then((cities) => setCities(cities));
  }, []);

  useEffect(() => {
    setInfo(getInfo());
  }, [citizens, cities]);

  return <>
    <ListItemRender data={info}/>
  </>;
};

export default List;