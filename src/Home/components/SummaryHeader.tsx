import React, { useEffect, useState } from 'react'
import { ItemCovid } from '../../components';
import { Places } from '../../types/Places.type'
import { Container, RowContainer } from './styles_components'

export default function SummaryHeader({ data }: Places) {
    const [infected, setInfected] = useState('');
    const [vaccinated, setVaccinated] = useState('');
    const [recovered, setRecovered] = useState('');
    const [dead, setDead] = useState('');

    useEffect(() => {
        function getResults() {

            let t_infected = 0;
            let t_vaccinated = 0;
            let t_recovered = 0;
            let t_dead = 0;

            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                t_infected += element.infected;
                t_vaccinated += element.vaccinated;
                t_recovered += element.recovered;
                t_dead += element.dead;
            }

            setInfected(t_infected.toString());
            setVaccinated(t_vaccinated.toString());
            setRecovered(t_recovered.toString())
            setDead(t_dead.toString());
        }
        getResults();
    }, [])

    return (
        <Container>
            <RowContainer>
                <ItemCovid primary title={'Total cases'} description={infected} />
                <ItemCovid title={'People vaccinated'} description={vaccinated} />
            </RowContainer>
            <RowContainer>
                <ItemCovid title={'Deaths'} description={dead} />
                <ItemCovid title={'Recoveries'} description={recovered} />
            </RowContainer>
        </Container>
    )

}
