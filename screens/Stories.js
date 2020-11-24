import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CreateStory from '../components/CreateStory';
import Story from '../components/Story';

const Stories = () => {

    const data = [
        <CreateStory
            picture='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg'
            key={0}
        />,
        <Story
            key={1} 
            pictures='https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            profilePicture="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />,
        <Story
            key={2}
            pictures='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
            profilePicture='https://images.unsplash.com/photo-1421986583638-7966e436a03a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
        />,
        <Story
            key={3}
            pictures='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
            profilePicture='https://images.all-free-download.com/images/graphicthumb/natural_beauty_highdefinition_picture_166133.jpg'
        />,
        <Story
            key={4}
            pictures='https://cdn.photographypro.com/wp-content/uploads/2020/06/Children-Photography-51.jpg'
            profilePicture='https://i.pinimg.com/236x/32/6c/04/326c0459349965c9906a7ab3544fbe3b.jpg'
        />,
        <Story
            key={5}
            pictures='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
            profilePicture='https://i.pinimg.com/originals/c8/83/4f/c8834f196eb06df631fd498aca5f0872.jpg'
        />,
        <Story
            key={6}
            pictures='https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1552917897000/photosp/bbec4e1d-e81c-4fbb-bff9-315849125046/stock-photo-farm-horse-beauty-in-nature-sunrise-countryside-family-life-happy-pets-outdoor-adventures-hidden-gems-bbec4e1d-e81c-4fbb-bff9-315849125046.jpg'
            profilePicture='https://www.stocksy.com/blog/wp-content/uploads/2019/09/Stocksy_comp_2570986.jpg'
        />
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => item}
                numColumns={3}
            />
        </View>
    )
}
export default Stories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})