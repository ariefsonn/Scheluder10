import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'

export default class Upja extends Component {
  render(){
    return(
      <ScrollView>
      <View style={{ padding: 32 }}>
        <Image source={require('../../assets/schw.png')} style={{ width: 200, height: 180, alignSelf: 'center', marginTop: 10 }} />
        <View style={{ flexDirection: 'row' }}>
          <TextInput keyboardType="default" placeholder="the name of the schedule" style={{ padding: 12 }} />
        </View>
        <TouchableOpacity style={{ padding: 10, backgroundColor: 'purple', alignItems: 'center', marginRight: 80,marginLeft: 80, marginTop: 30 }}>
          <Text style={{ fontSize: 10, color: 'white' }}>Buat Jadwal</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
}