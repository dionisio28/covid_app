import styled from "styled-components/native";
import ThemeData from "../../contants/colors";

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 16px;
    justify-content: space-between;
    flex-direction: row;
`;

export const Row = styled.TouchableOpacity`
   flex-direction: row;
`;

export const RowCenter = styled.TouchableOpacity`
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

export const Position = styled.Text`
    height: 30;
    padding: 8px;
    background-color: #FFF;
    font-size: 12px;
    color: ${ThemeData.greyColor};
`;

export const Country = styled.Text`
    font-size: 14px;
    color: ${ThemeData.textColor};
`;

export const Infected = styled.Text`
    font-size: 14px;
    color: ${ThemeData.primaryTextColor};
`;

export const LastUpdate = styled.Text`
    font-size: 12px;
    color: ${ThemeData.greyColor};
`;