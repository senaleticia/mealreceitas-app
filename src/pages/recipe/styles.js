import styled from 'styled-components/native';
import fonts from '../../components/fonts';
import colors from '../../components/colors';

export const Main = styled.View`
    padding: 15px;
    align-items: center;
`

export const Header = styled.View`
    background-color: #fff;
    justify-content: center;
    align-items: center;
    height: 100px;
`

export const RecipeTitle = styled.Text`
    font-size: 30px;
    color: #47525E;
    font-family: ${fonts.title};
`

export const AuthorRecipe = styled.Text`
    font-size: 17px;
    color: #47525E;
    font-family: ${fonts.subtitle};
`

export const ContainerPhoto = styled.View`
    width: 100%;
    height: 250px;
`

export const ImageRecipe = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 7px;
`

export const CardInfo = styled.View`
    width: 80%;
    height: 60px;
    align-self: center;
    margin-top: 8%;
    border-radius: 7px;
    /* background-color: #CACACA; */
    box-shadow: 5px 5px 5px ${colors.gray};
    flex-direction: row;
    justify-content: space-around ;
    align-items: center;
`

export const InfoIcon = styled.View`
    width: 38%;
    justify-content: center;
`

export const VerticalLine = styled.View`
    width: 1px;
    height: 60%;
    background-color: #969FAA;
`

export const InfoLabel = styled.Text`
    font-size: 15px;
    color: ${colors.green};
    align-self: center;
    font-family: ${fonts.text};
`

export const LightUnderline = styled.View`
    border-bottom-width: 3px;
    border-bottom-color: ${colors.lightGray};
    width: 100%;
    margin-top: 10%;
`

export const ContainerRecipe = styled.View`
    width: 100%;
`

export const TitleRecipe = styled.Text`
    font-size: 30px;
    font-family: ${fonts.title};
    color: ${colors.marsala};
    align-self: center;
`

export const ContainerIngredients = styled.View`
    margin-top: 9%;
    justify-content: flex-start;
`

export const ContainerList = styled.View`
    flex: 1;
    padding: 10;
`

// export const Listagem = styled.FlatList`
//     paddingHorizontal: 20;
// `

export const ListItem = styled.View`
    backgroundColor: 'pink';
    marginTop: 20;
    padding: 30;
`