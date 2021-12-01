import React from "react";
import { View } from "react-native";
import { PlacesData } from "../../types/Places.type";
import {
  Container,
  LastUpdate,
  Position,
  Country,
  Infected,
  Row,
  RowCenter,
} from "./styles";
import CountryFlag from "react-native-country-flag";
import { SizedBox } from "../styles.components";
interface CountrieItemProps {
  data: PlacesData;
  position: number;
}

const getLastUpdate = (value: Date) => {
  if (!value) return "not determined";

  let lastUpdate = new Date(value);
  let date = new Date();
  let difference = date.getTime() - lastUpdate.getTime();
  let date_difference = new Date(difference);

  if (date_difference.getDay() == 1) {
    return "a day ago";
  }
  if (date_difference.getDay() > 1) {
    return `${date_difference.getDay()} days ago`;
  }
  if (date_difference.getHours() == 1) {
    return "an hour agoo";
  }
  if (date_difference.getHours() > 1) {
    return `${date_difference.getHours()}hours ago`;
  }
};

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
          <LastUpdate>{getLastUpdate(data.lastUpdated)}</LastUpdate>
        </View>
      </Row>
      <Infected>{data.infected.toString()}</Infected>
    </Container>
  );
}
