import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'

export default class Staja extends Component {
  render(){
    return(
      <TouchableOpacity style={{ padding: 12, backgroundColor: 'purple', alignItems: 'center', marginRight: 170, marginLeft: 170, marginTop: 500 }}>
        <Image source={require('../../assets/tambah.png')} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    )
  }
} 