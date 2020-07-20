import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Listagem } from '../pages/recipe/styles';

export default class List extends Component{
    state = {
        data: [
            {id: 1, ingredient: 'Ingrediente 1'},
            {id: 1, ingredient: 'Ingrediente 2'},
            {id: 1, ingredient: 'Ingrediente 3'},
            {id: 1, ingredient: 'Ingrediente 4'},
        ]
         
    }

    renderItem = ({item}) => (
        <View style={styles.listItem}>
            <Text>{item.ingredient}</Text>
        </View>
    )

    render(){
        return(
            <FlatList style={{marginTop: 30}}
            contentContainerStyle={styles.list}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={this.renderFooter}/>
        )
    }

    renderFooter = () => {
        if(!this.state.loading) return null;

        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,
    }, 

    listItem: {
        backgroundColor: 'pink',
        marginTop: 20,
        padding: 30,
    }
})