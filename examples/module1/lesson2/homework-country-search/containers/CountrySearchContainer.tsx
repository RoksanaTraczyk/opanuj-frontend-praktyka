import {useEffect, useState} from 'react';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import {Country} from '../types/Country.ts';
import CountryList from "../components/CountryList.tsx";

function CountrySearchContainer() {
    const [name, setName] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [countries, setCountries] = useState<Country[]>([]);
    const COUNTRIES_HOST = 'https://restcountries.com/v3.1';
    const ALL_COUNTRIES_URL = COUNTRIES_HOST + '/all';
    const FILTER_COUNTRIES_BY_NAME_URL = COUNTRIES_HOST + '/name/';

    function getCorrectUrl() {
        if (name === '') {
            return ALL_COUNTRIES_URL;
        }
        return FILTER_COUNTRIES_BY_NAME_URL + name;
    }

    useEffect(() => {
        fetch(getCorrectUrl())
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                setCountries([])

            })
            .then((data) => setCountries(data || []))
            .catch((error) => {
                    console.error('Error fetching data:', error);
                    setCountries([])
                }
            );
    }, [name]);


    const sortedCountries = [...countries].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.common.localeCompare(b.name.common);
        } else if (sortOption === 'population') {
            return a.population - b.population
        }
        return 0;
    });

    return (
        <>
            <div className="pt-20"/>
            <SearchTitle/>
            <div className="pt-8"/>
            <SearchForm
                name={name}
                setName={setName}
                sortOption={sortOption}
                setSortOption={setSortOption}
            />
            <div className="pt-12"/>
            <CountryList countries={sortedCountries}/>
            <div className="pt-16"/>
        </>
    );
}

export default CountrySearchContainer;
