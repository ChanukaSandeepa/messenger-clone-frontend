import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const ActiveUser = ({ name, profile }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: profile }} />
                <View style={styles.activeStatus} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default ActiveUser

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    imageContainer: {
        position: 'relative'
    },
    image: {
        width: responsiveHeight(5),
        height: responsiveHeight(5),
        borderRadius: 200
    },
    name: {
        paddingHorizontal: 10,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold'
    },
    activeStatus: {
        position: 'absolute',
        width: responsiveHeight(2),
        height: responsiveHeight(2),
        backgroundColor: '#03C003',
        bottom: -2,
        right: -2,
        borderRadius: 200,
        borderColor: 'white',
        borderWidth: 2
    }
})