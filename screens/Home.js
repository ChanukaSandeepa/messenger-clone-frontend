import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ActiveUserOnHome from '../components/ActiveUserOnHome';
import CreateRoom from '../components/CreateRoom';
import Chat from '../components/Chat';

const Home = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconContainer}>
                    <Ionicons name="ios-search" size={responsiveFontSize(3)} color="gray"/>
                </View>
                <TextInput style={styles.search} placeholder="Search"/>
            </View>
            <View style={styles.activeUsersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginVertical : 10 }}>
                    <CreateRoom/>
                    <ActiveUserOnHome
                        name='Ogansteen'
                        picture='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg'
                    />
                    <ActiveUserOnHome
                        name='David'
                        picture='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    />
                    <ActiveUserOnHome
                        name='John'
                        picture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    />
                    <ActiveUserOnHome
                        name='Amanda'
                        picture='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg'
                    />
                    <ActiveUserOnHome
                        name='Richard'
                        picture='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg'
                    />
                </ScrollView>
            </View>
            <Chat
                navigation={navigation}
                profilePicture='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Ogasteen"
                isLastMessageYours={true}
                hasSeen={true}
                time="19.55"
                message="Okay"
            />
            <Chat
                navigation={navigation}
                profilePicture="https://www.stocksy.com/blog/wp-content/uploads/2019/09/Stocksy_comp_2570986.jpg"
                name="John Newton"
                isLastMessageYours={false}
                hasSeen={false}
                time="21.00"
                message="Hello there"
            />
            <Chat
                navigation={navigation}
                profilePicture='https://cdn.photographypro.com/wp-content/uploads/2020/06/Children-Photography-51.jpg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Amanda Joshef"
                isLastMessageYours={true}
                hasSeen={true}
                time="21.55"
                message="I'm doing well!"
            />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
        paddingTop : 10
    },
    searchContainer : {
        width : responsiveWidth(90),
        height : responsiveHeight(5),
        backgroundColor : 'rgba(211, 211, 211, 0.2)',
        borderRadius : 30,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        // backgroundColor : 'red'
    },
    search : {
        flex : 1
    },
    searchIconContainer : {
        paddingHorizontal : 10
    },
    activeUsersContainer : {
        height : responsiveHeight(13),
        width : responsiveWidth(100),
        marginVertical : 5
    }
})