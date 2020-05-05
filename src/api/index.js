import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changedUrl = url;
    if (country) {
        changedUrl = `${url}/countries/${country}`;
    }
    try {

        const { data } = await axios.get(changedUrl);
        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        };


    } catch (error) {
        console.log(error)
    }
}

export const fetchcountriesdata = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);

    } catch (error) {
        console.log(error);
    }
}