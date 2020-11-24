import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const ReceivedMessage = ({msg, picture}) => {
    return (
        <View style={styles.container}>
            <View style={styles.proPicContainer}>
                <Image style={styles.proPic} source={{ uri : picture }} />
            </View>
            <View style={styles.msgContainer}>
                <Text style={styles.msg}>{msg}</Text>
            </View>
        </View>
    )
}

export default ReceivedMessage

const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 10,
        marginVertical : 5,
        flexDirection : 'row',
        maxWidth : '80%'
    },
    msgContainer : {
        backgroundColor : '#F1F0F0',
        borderRadius : 20,
        padding : 10,
    },
    msg : { 
        color : 'black',
        fontWeight : '500',
        fontSize : responsiveFontSize(1.9)
    },
    proPicContainer : {
        display : 'flex',
        paddingRight : 10,
        justifyContent : 'flex-end',
        // backgroundColor : 'red'
    },
    proPic : {
        width : responsiveHeight(4),
        height : responsiveHeight(4),
        borderRadius : 200
    }
})