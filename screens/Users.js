import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ActiveUser from '../components/ActiveUser';

const Users = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ActiveUser
                    name="Ogasteen"
                    profile='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
                />
                <ActiveUser
                    name="John Newton"
                    profile='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                />
            </ScrollView>
        </View>
    )
}

export default Users

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor : 'white'
    }
})