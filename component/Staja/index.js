import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'

import DATA from '../../assets/item'

export default class Staja extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: '',
            waktu: ''

        }
    }

    componentDidMount() { 
        var hours = new Date().getHours();
        let waktu = this.state.waktu

        if (hours == waktu) {

        }
    }

    render(){
        return(
            <ScrollView>
                <FlatList 
                    data={DATA}
                    renderItem={({ item }) => {
                        return(
                            <View style={{ display: 'flex', padding: 12, flexDirection: 'row', borderWidth: 2, borderRadius: 3, borderColor: 'black' }}>
                                <Image source={{uri: item.image}} style={{ height: 60, width: 60, marginRight: 18, borderRadius: 30 }} />
                                <View>
                                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                    <Text style={{ fontSize: 18 }}>{item.jam}</Text>
                                </View>
                                <View>
                                <Image source={require('../../assets/alaram3.jpg')} style={{ height: 30, width: 30, marginLeft: 150, flexDirection: 'column', marginTop: 10 }}/>
                                </View>
                            </View>
                        )
                    }} 
                />
            </ScrollView>
        )
    }
}