import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getPlaces } from '../service';
import SummaryHeader from './components/SummaryHeader';
import WorldButton from '../components/WorldButton/WorldButton';
import { Container, Title } from './styles';
import FilterCountries from './components/filter_countries/FilterCountries';
import { Places } from '../types/Places.type';

const HomeScreen: React.FC = () => {
  const [places, setPlaces] = useState<Places>({} as Places);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function loadPlaces() {
      try {
        const response = await getPlaces();
        if (response.status == 200) {
          setPlaces(response.data)

        }
      } catch (error) {
        Alert.alert('Mensagme', 'Tivemos um problema ao buscar os dados, tente novamente mais tarde.\nError: '+error)
      }
      finally {
        setIsLoading(false)
      }
    }
    loadPlaces();
  }, [])

  function handleButtonWorldOverwiew() {

  }

  if (isLoading) {
    return (
      <Container>
        <Title>
          Loading
        </Title>
      </Container>
    )
  }

  return (
    <Container>
      <SummaryHeader data={places.data} />
      <WorldButton onPress={handleButtonWorldOverwiew}/>
      <FilterCountries data={places.data}/>
    </Container>
  )
}

export default HomeScreen;