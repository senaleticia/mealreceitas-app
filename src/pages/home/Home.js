import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button, StatusBar } from 'react-native';
import { Header, TitlePurple, TitleGreen, Label, Underline, CardRecipe, Main, ImageRecipe, InfoRecipe, TitleRecipe, ContainerRow, ButtonRecipe, BtnText, ContainerButton, } from './styles';
import { SearchBar } from 'react-native-elements';

export default class Home extends Component {

    constructor(props){
        super()
        this.state = {
            search:''
        }
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar barStyle={'dark-content'} backgroundColor='#e0e0e0' />

                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView>
                        <Header>
                            <TitlePurple>Meal</TitlePurple>
                            <TitleGreen>Receitas</TitleGreen>
                        </Header>
                        <Main>
                            <View>
                                {/* <View style={{ width: '80%', height: 35, backgroundColor: '#ccc8', alignSelf: 'center', marginTop: "10%" }}></View> */}
                                <SearchBar
                                    inputContainerStyle={{ backgroundColor: 'white', borderWidth: 2, borderColor: '#ccc' }}
                                    // inputStyle={{ backgroundColor: 'white' }}
                                    containerStyle={{ backgroundColor: '#fff', borderRadius: 5 }}
                                    placeholderTextColor={'#g5g5g5'}
                                    lightTheme={true}
                                    round
                                    searchIcon={{ size: 24, color: '#ccc' }}
                                    onChangeText={text => this.setState({ search: text })}
                                    onClear={text => this.setState({ search: '' })}
                                    placeholder="Buscar..."
                                    value={this.state.search}>
                                </SearchBar>

                                <Label>O que você quer comer hoje?</Label>
                                <Underline></Underline>
                            </View>
                            <CardRecipe>
                                <ImageRecipe source={require("../../assets/foodtest.jpg")} />

                                <InfoRecipe>
                                    <TitleRecipe>Miojo Simples e Fácil</TitleRecipe>
                                    <ContainerRow>
                                        <TitleRecipe>Por: Letícia Sena</TitleRecipe>
                                        <TitleRecipe style={{ color: "#1b6b46" }}>12min</TitleRecipe>
                                    </ContainerRow>
                                </InfoRecipe>
                                <ContainerButton>
                                    <ButtonRecipe>
                                        <BtnText>Ver receita</BtnText>
                                    </ButtonRecipe>
                                </ContainerButton>
                            </CardRecipe>
                            <CardRecipe>
                                <ImageRecipe source={require("../../assets/food2.jpg")} />

                                <InfoRecipe>
                                    <TitleRecipe>Macarronada Simples e Fácil</TitleRecipe>
                                    <ContainerRow>
                                        <TitleRecipe>Por: Letícia Sena</TitleRecipe>
                                        <TitleRecipe style={{ color: "#1b6b46" }}>12min</TitleRecipe>
                                    </ContainerRow>
                                </InfoRecipe>
                                <ContainerButton>
                                    <ButtonRecipe>
                                        <BtnText>Ver receita</BtnText>
                                    </ButtonRecipe>
                                </ContainerButton>
                            </CardRecipe>
                            <CardRecipe>
                                <ImageRecipe source={require("../../assets/food3.jpg")} />

                                <InfoRecipe>
                                    <TitleRecipe>Pizza Italiana Simples e Fácil</TitleRecipe>
                                    <ContainerRow>
                                        <TitleRecipe>Por: Letícia Sena</TitleRecipe>
                                        <TitleRecipe style={{ color: "#1b6b46" }}>12min</TitleRecipe>
                                    </ContainerRow>
                                </InfoRecipe>
                                <ContainerButton>
                                    <ButtonRecipe>
                                        <BtnText>Ver receita</BtnText>
                                    </ButtonRecipe>
                                </ContainerButton>
                            </CardRecipe>
                        </Main>
                    </ScrollView>
                </SafeAreaView>
            </React.Fragment>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
