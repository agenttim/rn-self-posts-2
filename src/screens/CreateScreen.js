import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {addPost} from "../store/actions/post";
import {PhotoPicker} from "../components/PhotoPicker";

export const CreateScreen = ({navigation}) => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const imgRef =  useRef()

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    const photoPickHandler = (uri) => {
        imgRef.current = uri
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Создай новый пост</Text>
                    <TextInput
                        style={styles.textarea}
                        placeholder="Введите текст заметки"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button
                        title='Создать пост'
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!text}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

export function createScreenOptions(
    {
        navigation
    }
) {
    return {
        headerTitle: 'Создать пост',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Toggle Drawer"
                    iconName='ios-menu'
                    onPress={() => navigation.toggleDrawer()}
                    buttonStyle={{marginLeft: 10}}
                />
            </HeaderButtons>)
    }
}

const styles = StyleSheet.create(
    {
        wrapper: {
            padding: 10
        }
        ,
        title: {
            fontSize: 20,
            textAlign: "center",
            fontFamily: "open-regular",
            marginVertical: 10
        },
        textarea: {
            padding: 10,
            marginBottom: 10
        }
    }
)