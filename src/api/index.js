import axios from 'axios'
const url = "https://covid19.mathdro.id/api"

export const fetchdata = async (country) => {

    let changeableURL = url;

    if (country) {
        changeableURL = `${url}/countries/${country}`;
    }
    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error) {

        console.log(error)


    }
}

export const fetchDailyData = async () => {

    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

    }
    catch (error) {
        return error

    }

}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => (country.name));

    }
    catch (err) {

        console.log(err);
    }
}