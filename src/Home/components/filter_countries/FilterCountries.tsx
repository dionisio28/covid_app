import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import CountrieItem from '../../../components/countrieItem/CountrieItem';
import InputText from '../../../components/inputText/inputText'
import { RowInputContainer } from '../../../components/styles.components'
import { Places, PlacesData } from '../../../types/Places.type';
import { FilterContainer } from '../styles_components';

export default function FilterCountries({ data }: Places) {
    const [search, setSearch] = useState('');
    const [countriesList, setCountriesList] = useState<PlacesData[]>([])
    useEffect(() => {
        function loadFilteredList() {

            let lUSA = data.filter(item => item.country == 'US');
            let us_object: PlacesData = {} as PlacesData;
            us_object.id = '0'
            us_object.name = 'United States'
            us_object.country = 'US'
            us_object.infected = lUSA.reduce(function (previus, current) {
                return previus += current.infected;
            }, 0)

            var t_countriesList = data.filter(item => item.country != 'US');

            t_countriesList.push(us_object)

            var filterList = t_countriesList.sort(function (a, b) {
                if (a.infected > b.infected) return -1;
                if (a.infected < b.infected) return 1;
                return 0;
            });

            setCountriesList(filterList);
        }
        loadFilteredList();
    }, [])

    return (
        <FilterContainer>
            <InputText value={search} onChange={setSearch} />
            <FlatList
                data={countriesList}
                renderItem={({item, index}) => {
                    return <CountrieItem data={item} position={1+index}/>
                }}
            />
        </FilterContainer>
    )
}
