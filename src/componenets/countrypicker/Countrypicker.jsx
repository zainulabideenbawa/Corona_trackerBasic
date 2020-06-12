import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Countrypicker.module.css'

import { fetchCountries } from '../../api/index';




const Countrypicker = ({ handleCountryChnage }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesApi = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchCountriesApi()

    }, [fetchedCountries])

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChnage(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default Countrypicker;