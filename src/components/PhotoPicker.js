import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Alert, Button, Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import * as Camera from "expo-image-picker";


export const PhotoPicker = ({onPick}) => {

    const [image, setImage] = useState(null)
    const [permission, requestPermission] = Camera.useCameraPermissions()

    useEffect(() => {
        requestPermission()
    }, [])

    const takePhoto = async () => {
        if (permission.granted) {
            const img = await ImagePicker.launchCameraAsync({
                quality: 0.7,
                allowsEditing: false,
                aspect: [16, 9]
            })
            setImage(img.uri)
            onPick(img.uri)
        } else {
            Alert.alert('Ошибка', 'Вы не дали прав на создание фото')
        }
    }

    return (
        <View style={styles.wrapper}>
            <Button title='Сделать фото' onPress={takePhoto}/>
            {image && <Image style={styles.image} source={{uri: image}}/>}
        </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})





