import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons'

const Chat = ({ name, message, hasSeen, isLastMessageYours, time, profilePicture, seenPicture, navigation }) => {
    
    const onPresshanlder = () => {
        navigation.navigate('ChatView')
    }
    
    return (
        <TouchableOpacity onPress={onPresshanlder} activeOpacity={0.7} style={styles.container}>
            <View style={styles.proPicContainer}>
                <Image
                    source={
                        {
                            uri: profilePicture
                        }
                    }
                    style={styles.proPic}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    {
                        isLastMessageYours ? <Text style={styles.message}>You : {message}</Text> : <Text style={styles.message}>{message}</Text>
                    }
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            {isLastMessageYours && <View style={styles.seenProPicContainer}>
                {!hasSeen ? <View style={styles.deliveryMarkContainer}>
                    <Ionicons name="ios-checkmark" size={responsiveFontSize(1)} color="white"/>
                </View>
                :
                <Image
                    style={styles.seenProPic}
                    source={
                        {
                            uri: seenPicture
                        }
                    }
                />}
            </View>}
        </TouchableOpacity>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: responsiveHeight(9),
        paddingHorizontal: 8,
        marginVertical: 2
    },
    proPicContainer: {
        width: '17%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    proPic: {
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        borderRadius: 200
    },
    descriptionContainer: {
        flex: 1,
        paddingLeft: responsiveWidth(2)
    },
    nameContainer: {
        height: '50%',
        justifyContent: 'flex-end',
    },
    name: {
        fontSize: responsiveFontSize(2),
        color: 'rgba(0,0,0,0.8)'
    },
    detailsContainer: {
        flexDirection: 'row'
    },
    message: {
        color: 'rgba(0,0,0,0.8)',
        fontSize: responsiveFontSize(1.7)
    },
    time: {
        paddingHorizontal: 10,
        color: 'rgba(0,0,0,0.8)',
        fontSize: responsiveFontSize(1.5),
        textAlignVertical : 'center'
    },
    seenProPicContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    seenProPic: {
        width: responsiveHeight(2),
        height: responsiveHeight(2),
        borderRadius: 200
    },
    deliveryMarkContainer: {
        width: responsiveHeight(2),
        height: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(211,211,211,0.8)',
        borderRadius: 200
    }
})