import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image, ImageBackground } from 'react-native'

export default class Menja extends Component {

  constructor(props) {
    super(props)

    this.state={
      jadwal: '',
      rubah: ''
    }

  }

  men = () => {
    let jadwal = this.state.jadwal
    let rubah = this.state.rubah
    
    
  }

  render(){
    return(
      <ImageBackground source={require('../../assets/back.jpg')} style={{ width: '100%', height: '100%' }} >
      <ScrollView>
      <View style={{ padding: 32 }}>
        <Image source={require('../../assets/schw.png')} style={{ width: 200, height: 180, alignSelf: 'center', marginTop: 10 }} />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>

          <TextInput keyboardType="default" placeholder="the name of the schedule" style={{ color: 'white', padding: 12, borderWidth: 2, borderRadius: 4, borderColor: 'purple', width: 250, fontColor: 'white' }} />

          <TouchableOpacity style={{ padding: 14, backgroundColor: 'purple', alignItems: 'center', marginRight: 20,   marginLeft: 20 }}>
            
              <Image source={require('../../assets/tambah.png')} style={{ width: 15, height: 15 }} />

          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ borderRadius: 20, padding: 10, backgroundColor: 'purple', alignItems: 'center', marginRight: 80,marginLeft: 80, marginTop: 30 }}>
          <Text style={{ fontSize: 10, color: 'white' }}>Buat Jadwal</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </ImageBackground>
    )
  }
}