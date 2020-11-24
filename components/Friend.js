import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

export default function Friend({name, userName, image, onPress}) {
    return (
        <View style={styles.container}>
            <Image source={{ uri : image }} style={styles.image}/>
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.infoBtn}>
                <FontAwesome5 name="info-circle" size={responsiveFontSize(2.5)} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10,
        paddingHorizontal : 10
    },
    image : {
        width : responsiveHeight(6),
        height : responsiveHeight(6),
        borderRadius : 200
    },
    details : {
        paddingHorizontal : 15,
        flex: 1,
    },
    name : {
        fontWeight : 'bold',
        fontSize : responsiveFontSize(1.9)
    },
    userName : {
        color : 'gray',
        fontSize : responsiveFontSize(1.5)
    },
    infoBtn : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 5
    }
})