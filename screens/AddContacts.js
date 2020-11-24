import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AddFriend from '../components/AddFriend'

export default function AddContacts() {
    return (
        <ScrollView style={styles.container}>
            <AddFriend
                name="Ogasteen"
                picture='https://cdn.photographypro.com/wp-content/uploads/2020/06/Children-Photography-51.jpg'
            />
            <AddFriend
                name="David Warner"
                picture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            />
            <AddFriend
                name="Mark"
                picture="https://cdn.photographypro.com/wp-content/uploads/2020/06/Children-Photography-51.jpg"
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor  :'white'
    }
})