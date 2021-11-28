import React from 'react'
import { InputTextContainer, RowInputContainer, SizedBox } from '../styles.components'
import { Fontisto } from '@expo/vector-icons';
import ThemeData from '../../contants/colors';

interface InputTextProps {
  onChange: any;
  placeholder?: string;
  value: string;
}

export default function InputText({ onChange, placeholder = "Buscar região", value }: InputTextProps) {
  return (
    <RowInputContainer>
      <SizedBox />
      <Fontisto name="search" size={18} color={ThemeData.greyColor} />
      <InputTextContainer
        onChangeText={onChange}
        placeholder={placeholder}
        textAlign={'left'}
        value={value}
      />
    </RowInputContainer>
  )
}
