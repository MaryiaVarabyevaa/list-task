import * as React from 'react';
import { useEffect, useState } from 'react';
import { getAllCitizens } from './http/citizenAPI';
import { getAllCities } from './http/cityAPI';
import ListItemRender from './ListItemRender';
import Tooltip from './Tooltip';

const initialTooltip = {
  show: false,
  x: 0,
  y: 0,
};

const List = () => {
  const [citizens, setCitizens] = useState([]);
  const [cities, setCities] = useState([]);
  const [info, setInfo] = useState([]);
  const [tooltip, setTooltip] = useState(initialTooltip);
  const [tooltipInfo, setTooltipInfo] = useState([]);

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

  let timer;

  const handlerMouseMove = (event) => {
    event.preventDefault();
    const elem = event.target;
    if (elem && elem.classList.contains('person')) {
      const { pageY, pageX } = event;
      setTooltipInfo([elem.dataset.city, elem.dataset.population]);
      clearTimeout(timer);
      setTooltip(initialTooltip);
      timer = setTimeout(() => {
        setTooltip({ show: true, x: pageX + 10, y: pageY + 10 } );
      }, 500);
    }
    else {
      clearTimeout(timer);
      setTooltip(initialTooltip);
    }
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handlerMouseMove);
    return () => document.body.removeEventListener('mousemove', handlerMouseMove);
  }, []);

  useEffect(() => {
    getCitizens().then((citizens) => setCitizens(citizens));
    getCities().then((cities) => setCities(cities));
  }, []);

  useEffect(() => {
    setInfo(getInfo());
  }, [citizens, cities]);

  return <>
    <ListItemRender data={info}/>
    {
      tooltip.show && <Tooltip x={tooltip.x} y={tooltip.y} tooltipInfo={tooltipInfo} />
    }
  </>;
};

export default List;