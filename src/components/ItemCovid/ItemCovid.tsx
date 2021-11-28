import React from 'react'
import { Subtitle, Title, BlankContainer } from '../styles.components'

interface ItemCovidProps {
    title: string;
    description: string;
    primary?: boolean;
}

export default function ItemCovid({ title, description, primary = false }: ItemCovidProps) {
    return (
        <BlankContainer>
            <Title primary={primary}>{description}</Title>
            <Subtitle >{title}</Subtitle>
        </BlankContainer>
    )
}
