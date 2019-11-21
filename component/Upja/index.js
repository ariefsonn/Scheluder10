import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'

export default class Upja extends Component {
  render(){
    return(
      <ScrollView>
      <View style={{ padding: 32 }}>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>

          <TextInput keyboardType="default" placeholder="the name of the schedule" style={{ color: 'brown', padding: 12, borderWidth: 2, borderRadius: 4, borderColor: 'purple', width: 250, fontColor: 'white' }} />

          <TouchableOpacity style={{ padding: 13, backgroundColor: 'purple', alignItems: 'center', marginRight: 20,   marginLeft: 10 }}>
            
              <Image source={require('../../assets/tambah.png')} style={{ width: 15, height: 15 }} />

          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ borderRadius: 20, padding: 10, backgroundColor: 'purple', alignItems: 'center', marginRight: 80,marginLeft: 80, marginTop: 30 }}>
          <Text style={{ fontSize: 10, color: 'black' }}>Buat Jadwal</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
}