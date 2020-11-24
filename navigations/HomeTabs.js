import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Users from '../screens/Users';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { useAppContext } from '../context/Context';
import { CHANGE_HEADER } from '../context/reducer';
import PeopleTabs from './PeopleTabs';

const HomeTabs = () => {

    const Tab = createBottomTabNavigator()
    const [{}, dispatch] = useAppContext()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon : ({ color }) => {
                    if(route.name === 'Main'){
                        return <MaterialCommunityIcons name="chat" color={color} size={responsiveFontSize(3)}/>
                    } else if(route.name === 'Users'){
                        return <FontAwesome5 name="user-friends" color={color} size={responsiveFontSize(3)}/>
                    } 
                }
            })}
            tabBarOptions={
                {
                    activeTintColor : 'rgba(211,211,211,0.7)',
                    activeTintColor : 'black',
                    style : {
                        height : responsiveHeight(8)
                    },
                    tabStyle : {
                        padding : 5
                    },
                    labelStyle : {
                        fontSize : responsiveFontSize(1.5)
                    }
                }
            }
        >
            <Tab.Screen
                name="Main"
                options={
                    { title : 'Chats' }
                }
                component={Home}
                listeners={() => (
                    {
                        tabPress : e => {
                            dispatch({
                                type : CHANGE_HEADER,
                                payload : {
                                    status : false,
                                    title : 'Chat' 
                                }
                            })
                        }
                    }
                )}
            />
            <Tab.Screen
                name="Users"
                component={PeopleTabs}
                listeners={() => (
                    {
                        tabPress : () => {
                            dispatch({
                                type : CHANGE_HEADER,
                                payload : {
                                    status : true,
                                    title : 'Users' 
                                }
                            })
                        }
                    }
                )}
            />
        </Tab.Navigator>
    )
}
export default  HomeTabs