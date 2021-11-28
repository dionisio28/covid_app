import React from 'react';
import styled from 'styled-components/native';
import ThemeData from '../contants/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${ThemeData.backgroundColorApp};
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;
