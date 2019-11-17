import React, { Component } from './node_modules/react'
import { Image } from 'react-native'
import ImagePicker from './node_modules/react-native-image-picker'

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'iamge',
    },
};

ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
        console.log('User cancalled image picker');
    } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
    } else {
        const source = { uri: response.uri };

        this.setState({
            avatarSource: source,
        })
    }
});

export default class Coba extends Component{
    render(){
        return(
            <Image source={this.state.avatarSource} style={{ height: 180, width: 180, alignSelf: 'center' }} />
        )
    }
}