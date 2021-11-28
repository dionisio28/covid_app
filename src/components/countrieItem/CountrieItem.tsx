import React from 'react'
import { View } from 'react-native'
import { PlacesData } from '../../types/Places.type'
import { Container, LastUpdate, Position, Country, Infected, Row, RowCenter } from './styles'
import CountryFlag from "react-native-country-flag";
import { SizedBox } from '../styles.components'
interface CountrieItemProps {
    data: PlacesData;
    position: number;
}

export default function CountrieItem({ data, position }: CountrieItemProps) {
    return (
        <Container>
            <Row>
                <RowCenter>
                    <Position>{position}</Position>
                    <CountryFlag isoCode={data.country.toLocaleLowerCase()} size={30} />
                </RowCenter>
                <SizedBox />
                <View>
                    <Country>{data.name}</Country>
                    <LastUpdate>Um dia atrás</LastUpdate>
                </View>
            </Row>
            <Infected>{data.infected.toString()}</Infected>

        </Container>
    )
}
