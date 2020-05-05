import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import  {Box}  from "@material-ui/core";
import styles from "./CountriesPicker.module.css";

import { fetchcountriesdata } from "../../api";


const CountriesPicker = ({ handlecountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await fetchcountriesdata());
    };

    fetchCountries();
  }, [setFetchedCountries]);

  const handleChange = (event) => {setselectedCountry(event.target.value); };

  return (
    <div className={styles.container}>
      <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="white">
        <Box>
          <FormControl>
            <InputLabel>Country</InputLabel>
            <Select
              className={styles.select}
              value={selectedCountry}
              onChange={(e) => {
                handlecountry(e.target.value);
                handleChange(e);
              }}>
              <MenuItem value="">Global</MenuItem>
              {fetchedCountries.map((country, i) => (
                <MenuItem key={i} value={country}>{country}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};

export default CountriesPicker;
