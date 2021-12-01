import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, FlatList } from "react-native";
import { CountrieItem, InputText } from "../../../components";
import { Places, PlacesData } from "../../../types/Places.type";
import { FilterContainer } from "../styles_components";

export default function FilterCountries({ data }: Places) {
  const [search, setSearch] = useState("");
  const [countriesList, setCountriesList] = useState<PlacesData[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<PlacesData[]>([]);
  const loadFilteredList = useCallback(() => {
    let lUSA = data.filter((item) => item.country == "US");
    let us_object: PlacesData = {} as PlacesData;
    us_object.id = "0_us";
    us_object.name = "United States";
    us_object.country = "US";
    us_object.infected = lUSA.reduce(function (previus, current) {
      return (previus += current.infected);
    }, 0);

    let lGB = data.filter((item) => item.country == "GB");
    let gb_object: PlacesData = {} as PlacesData;
    gb_object.id = "1_gb";
    gb_object.name = "United Kingdom";
    gb_object.country = "GB";
    gb_object.infected = lGB.reduce(function (previus, current) {
      return (previus += current.infected);
    }, 0);

    var t_countriesList = data.filter(
      (item) => item.country != "US" && item.country != "GB"
    );

    t_countriesList.push(us_object);
    t_countriesList.push(gb_object);

    var filterList = t_countriesList.sort(function (a, b) {
      if (a.infected > b.infected) return -1;
      if (a.infected < b.infected) return 1;
      return 0;
    });

    setCountriesList(filterList);
    setFilteredCountries(filterList);
  }, [data]);

  const searhCountries = (text: string) => {
    var countries = countriesList.filter((item) => item.name.includes(text));
    setFilteredCountries(countries);
  };

  useEffect(() => {
    loadFilteredList();
  }, []);

  const handleSearh = (text: string) => {
    setSearch(text);
    if (text.length == 0) {
      setFilteredCountries(countriesList);
    }
    searhCountries(text);
  };

  return (
    <FilterContainer  behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <InputText value={search} onChange={handleSearh} />
      <FlatList
        style={{
          width: "90%",
          marginTop: 10,
          marginBottom: Platform.OS == "android" ? 8 : 20,
        }}
        data={filteredCountries}
        renderItem={({ item, index }) => {
          return <CountrieItem data={item} position={1 + index} />;
        }}
      />
    </FilterContainer>
  );
}
