


const ListItemRender = ({ data }) => {

  return <ul>
    {
      (data && Object.entries(data).length !== 0) &&
        Object.entries(data).map(([city, values]) => {
          const { districts, data } = values;
          return <li key={city}>
            { city }
            <ul>
              {
                Object.entries(districts).map(([district, streets]) => {
                  return <li key={district}>
                    { district }
                    <ul>
                      {
                        Object.entries(streets).map(([street, people]) => {
                          return <li key={street}>
                            { street }
                            <ul>
                              {
                                people.map((person, index) =>
                                    <li className="person" data-city={city} data-population={data} key={index}>{ person }</li>)
                              }
                            </ul>
                          </li>;
                        })
                      }
                    </ul>
                  </li>;
                } )
              }
            </ul>
          </li>;
        })
    }
  </ul>;
};

export default ListItemRender;