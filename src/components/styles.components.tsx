import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import ThemeData from "../contants/colors";

export const InputTextContainer = styled.TextInput`
  padding: ${Platform.OS == 'android' ? '12px ': '20px'};
`;

export const RowInputContainer = styled.View`
  background-color: #fff;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  min-width: 90%;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
`;

export const TouchableRow = styled.TouchableOpacity`
  background-color: #fff;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 90%;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 50px;
`;

interface ContainerProps {
  full?: boolean;
}

export const BlankContainer = styled.View<ContainerProps>`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  padding-vertical: 12px;
  min-width: ${({ full }) => (full ? "90%" : "45%")};
  margin: 8px;
  border-radius: 50px;
`;

export const SizedBox = styled.View`
  width: 16px;
`;

interface TitleProps {
  primary?: boolean;
}

export const Title = styled.Text<TitleProps>`
  color: ${({ primary }) =>
    primary ? ThemeData.primaryTextColor : ThemeData.textColor};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Subtitle = styled.Text`
  color: #969696;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
