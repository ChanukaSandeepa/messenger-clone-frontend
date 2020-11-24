import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions';

const CreateStory = ({picture}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content}>
                <Image style={styles.image} source={{ uri: picture }} />
                <View style={styles.proPicContainer}>
                    <Entypo name="plus" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CreateStory

const styles = StyleSheet.create({
    container : {
        flex : 1,
        height : responsiveHeight(30),
        padding : 5
    },
    content : {
        flex : 1,
        borderRadius : 10,
        position : 'relative',
        overflow: 'hidden',
    },
    proPicContainer : {
        position: 'absolute',
        width : responsiveHeight(6),
        height : responsiveHeight(6),
        backgroundColor: 'white',
        borderColor : 'blue',
        borderWidth : 2,
        borderRadius : 200,
        top : 3,
        left : 3,
        justifyContent : 'center',
        alignItems : 'center'
    },
    proPic : {
        width : responsiveHeight(5),
        height : responsiveHeight(5),
        borderRadius : 200
    },
    image : {
        width : '100%',
        height : '100%'
    }
})