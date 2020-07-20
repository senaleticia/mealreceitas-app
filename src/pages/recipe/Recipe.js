import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Header, RecipeTitle, AuthorRecipe, ContainerPhoto, ImageRecipe, CardInfo, InfoIcon, VerticalLine, InfoLabel, LightUnderline, Main, TitleRecipe, ContainerRecipe, ContainerIngredients } from "./styles";
import IconPortion from 'react-native-vector-icons/Ionicons'
import IconTimer from 'react-native-vector-icons/MaterialIcons'
import List from "../../components/List";

export default class Recipe extends Component {

    constructor() {
        super()
        this.state = {
            authorName: 'Leticia Sena'
        }
    }

    render() {
        const { authorName } = this.state

        return (
            <React.Fragment>
                <StatusBar barStyle={'dark-content'} backgroundColor='#e0e0e0' />
                <SafeAreaView >
                    <ScrollView>
                        <Header>
                            <RecipeTitle>
                                Pizza de frigideira
                            </RecipeTitle>
                            <AuthorRecipe>
                                Por: {authorName}
                            </AuthorRecipe>
                        </Header>
                        <Main>
                            <ContainerPhoto>
                                <ImageRecipe source={require("../../assets/food3.jpg")} />
                            </ContainerPhoto>
                            <CardInfo>
                                <InfoIcon>
                                    <IconPortion style={{ alignSelf: 'center' }} name={'ios-restaurant'} size={30} color={'#969696'} />
                                    <InfoLabel>8 porções</InfoLabel>
                                </InfoIcon>
                                <VerticalLine />
                                <InfoIcon>
                                    <IconTimer style={{ alignSelf: 'center' }} name={'timer'} size={30} color={'#969696'} />
                                    <InfoLabel>12min</InfoLabel>
                                </InfoIcon>
                            </CardInfo>
                            <LightUnderline />
                            <ContainerRecipe>
                                <TitleRecipe>
                                    Ingredientes
                                </TitleRecipe>
                                <ContainerIngredients>
                                    
                                </ContainerIngredients>
                            </ContainerRecipe>
                        </Main>
                    </ScrollView>
                </SafeAreaView>
            </React.Fragment>
        )
    }
}