import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')

export const Header = styled.View`
    background-color: #e0e0e0;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    height: 100px;
    /* margin-top:${height * 0.05}px; */
`

export const TitlePurple = styled.Text`
    font-family: 'Bellota_700Bold';
    font-size: 40px;
    color: #5e1b44;
    /* font-weight: bold; */
    /* margin-top:${height * 0.05}px; */
`
export const TitleGreen = styled.Text`
    font-size: 40px;
    color: #1b6b46;
    /* font-weight: bold; */
    /* margin-top:${height * 0.05}px; */
    font-family: 'Bellota_700Bold';
`
export const Main = styled.View`
    padding: 15px;
`

export const Label = styled.Text`
    color: #47525E;
    font-size: 20px;
    margin-top: 20%;
    font-family:'Manrope_600SemiBold';
`

export const Underline = styled.View`
    border-bottom-width: 3px;
    border-bottom-color: #5e1b44;
    width: 60%;
    margin-top: 13px;
`
export const CardRecipe = styled.View`
    margin-top: 15px;
    margin-bottom: 50px;
`

export const ImageRecipe = styled.Image`
    width: 100%;
    height: 250px;
`
export const InfoRecipe = styled.View`
    padding-top: 15px;
`
export const TitleRecipe = styled.Text`
    font-size: 15px;
    color: #4c4c4c;
    font-family:'Manrope_600SemiBold';
`

export const ContainerRow = styled.View`
    flex-direction: row;
    justify-content:space-between;
`

export const ButtonRecipe = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    background-color: #1b6b45;
    border-radius: 10px;
    justify-content: center;
`
export const BtnText = styled.Text`
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
`
export const ContainerButton = styled.View`
    align-items: center;
    margin-top: 15px;
`
// export const Header = styled.View`
// export const Header = styled.View`
// export const Header = styled.View`
// export const Header = styled.View`
// export const Header = styled.View`
// export const Header = styled.View`
