import React, {useState} from 'react';
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

export const CreateScreen = ({navigation}) => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const  img = 'https://sun9-70.userapi.com/sun9-44/impg/niGS92BiCE6urW0aWHRl8lAvfioDsduQ6ef7-g/iCee4wWYTHo.jpg?size=1280x853&quality=96&sign=5ef4219a4aa80189de480a78b8a2d11b&c_uniq_tag=ngcM3dN1_-Xy8e5KM468ZpTPOqAyXYzBy_7oUxSWBSc&type=album'

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
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
                    <Image
                        style={{width: '100%', height: 200, marginBottom: 10}}
                        source={{uri: img}}/>
                    <Button title='Создать пост' color={THEME.MAIN_COLOR} onPress={saveHandler}/>
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