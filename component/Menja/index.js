import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'

export default class Menja extends Component {
  render(){
    return(
      <ScrollView>
      <View style={{ padding: 32 }}>
        <Image source={require('../../assets/bts.png')} style={{ width: 180, height: 180, alignSelf: 'center', marginTop: 10 }} />

        <TextInput keyboardType="default" placeholder="Masukan nama jadwal" style={{ padding: 12, borderWidth: 2, borderRadius: 4, borderColor: 'purple', margin: 10 }} />

        <TouchableOpacity style={{ padding: 10, backgroundColor: 'purple', alignItems: 'center', marginRight: 120,marginLeft: 120 }}>
          <Image source={require('../../assets/tambah.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10, backgroundColor: 'purple', alignItems: 'center', marginRight: 80,marginLeft: 80, marginTop: 30 }}>
          <Text style={{ fontSize: 10, color: 'white' }}>Buat Jadwal</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
}