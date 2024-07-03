import { useState } from "react";
import propTypes from "prop-types"
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api/api";

// onSearchChange is passed from the parent component
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  
  // call handleOnchange > pass data > setting new value > call onSearchChange which is passed from app.js
  const handleOnChange = (searchDate) => {
    setSearch(searchDate); // update search
    onSearchChange(searchDate); // pass data that we got from input
  };

  // retreive the input value  that we are typing to get input and use this in fetch method in url to get the data
  const loadOptions = async (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        //return objects that has options
        return {
          options: response.data.map((city) => {
            return {
              //provide value and lable 
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AsyncPaginate
        placeholder="search"
        debounceTimeout={600} // debounce time to avoid frequent API calls
        value={search}
        onChange={handleOnChange} // update the value and emit that to the parent where we fetch weather data and pass that to other widgets
        loadOptions={loadOptions} // function to load options asynchronously
      />
    </>
  );
};

Search.propTypes = {
  onSearchChange: propTypes.func.isRequired,
};

export default Search;

 
