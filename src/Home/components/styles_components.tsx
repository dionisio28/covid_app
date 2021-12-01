import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 12px;
`;

export const FilterContainer = styled.KeyboardAvoidingView`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
 flex: 1;
`;

export const RowContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;

export const CountryFlatList = styled.FlatList`
  margin-top: 10px;
  margin-bottom: ${Platform.OS == 'android' ? '8px' : '16px'};
  
`
