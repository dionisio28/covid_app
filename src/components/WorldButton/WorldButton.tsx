import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { Title, SizedBox, TouchableRow } from '../styles.components';

interface WorldButtonProps {
    onPress: any;
}

export default function WorldButton({ onPress }: WorldButtonProps) {
    return (
        <TouchableRow onPress={onPress}>
            <Fontisto name="world-o" size={30} />
            <SizedBox />
            <Title>Resumo do mundo</Title>
        </TouchableRow>
    )
}
