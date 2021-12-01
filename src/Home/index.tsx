import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { getPlaces } from "../service";
import SummaryHeader from "./components/SummaryHeader";
import { Container, Title } from "./styles";
import FilterCountries from "./components/filter_countries/FilterCountries";
import { Places } from "../types/Places.type";
import { WorldButton } from "../components";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const HomeScreen: React.FC = () => {


  useEffect(() => {
   
  }, []);

  function handleButtonWorldOverwiew() {}

  // if (//TODO ) {
  //   return (
  //     <Container>
  //       <Title>Loading</Title>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      {/* <SummaryHeader data={places.data} />
      <WorldButton onPress={handleButtonWorldOverwiew} />
      <FilterCountries data={places.data} /> */}
    </Container>
  );
};

export default HomeScreen;
