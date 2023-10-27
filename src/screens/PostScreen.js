import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native';
import {DATA} from "../data";
import {THEME} from "../theme";
import {HeaderButtons} from "react-navigation-header-buttons/src/HeaderButtons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Item} from "react-navigation-header-buttons";

export const PostScreen = ({navigation, route}) => {


   const postId = route.params.postId

   const post = DATA.find(p => p.id === postId)

   useEffect(()=> {
       navigation.setParams({booked: post.booked})
   }, [])

   const removeHandler = () => {
       Alert.alert('Удаление поста', 'Вы точно хотите удалить пост?', [
               {
                   text: 'Отменить',
                   style: 'cancel'
               },
               {
                   text: 'Удалить',
                   onPress: () => {
                   },
                   style: 'destructive',
               },
           ],
           {cancelable: false}
       )
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
    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Take photo"
                    iconName={iconName}
                    onPress={() => console.log('Press photo')}/>
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
