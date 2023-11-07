import React, {useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native';
import {THEME} from "../theme";
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";
import {useDispatch, useSelector} from "react-redux";
import {removePost, toggleBooked} from "../store/actions/post";

export const PostScreen = ({navigation, route}) => {

    const dispatch = useDispatch()

    const postId = route.params.postId

    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

    const booked = useSelector(state => state.post.bookedPosts.some(p => p.id === postId))

    useEffect(() => {
        navigation.setParams({booked})
    }, [booked])

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(post))
    }, [dispatch, post])

    useEffect(() => {
        navigation.setParams({toggleHandler})
    }, [toggleHandler])

    const removeHandler = () => {
        Alert.alert('Удаление поста', 'Вы точно хотите удалить пост?', [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    onPress: () => {
                        navigation.navigate('Main')
                        dispatch(removePost(postId))
                    },
                    style: 'destructive',
                },
            ],
            {cancelable: false}
        )
    }

    if (!post) {
        return null
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    )
}

export const postScreenOptions = ({navigation, route}) => {
    const date = route.params.date
    const booked = route.params.booked
    const toggleHandler = route.params.toggleHandler
    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Take photo"
                    iconName={iconName}
                    onPress={toggleHandler}/>
            </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'open-regular',
    }
})
