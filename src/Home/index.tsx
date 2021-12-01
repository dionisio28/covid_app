import React, { useContext, useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { getPlaces } from "../service";
import SummaryHeader from "./components/SummaryHeader";
import { Container, Title } from "./styles";
import FilterCountries from "./components/filter_countries/FilterCountries";
import { Places } from "../types/Places.type";
import { WorldButton } from "../components";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { OverviewContext } from "../context";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const HomeScreen: React.FC = () => {

  const {isLoading, places, loadPlaces} = useContext(OverviewContext);
  useEffect(() => {
    loadPlaces();
  }, []);

  function handleButtonWorldOverwiew() {}

  if (isLoading) {
    return (
      <Container>
        <Title>Loading</Title>
      </Container>
    );
  }

  return (
    <Container>
      <SummaryHeader data={places.data} />
      <WorldButton onPress={handleButtonWorldOverwiew} />
      <FilterCountries data={places.data} />
    </Container>
  );
};

export default HomeScreen;
