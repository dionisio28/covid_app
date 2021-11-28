import React from 'react'
import { View, Text } from 'react-native'
import { PlacesData } from '../../types/Places.type'
import { CountriesProps } from '../../types/Summary.type'

interface CountrieItemProps {
    data: PlacesData;
    position: number;
}

export default function CountrieItem({data, position} : CountrieItemProps) {
    return (
        <View>
            <Text>{position}</Text>
            <Text>{data.name}</Text>
        </View>
    )
}
