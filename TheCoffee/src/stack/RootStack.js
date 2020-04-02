import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewsScreen } from '../components/NewsComponent';
import { OrderScreen } from '../components/OrderComponent';
import { ShopScreen } from '../components/ShopComponent';
import { UserScreen } from '../components/UserComponent';

const RootStack = createBottomTabNavigator();
export class RootStackScreen extends Component{
   render(){
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Order"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'News') {
                            iconName = focused
                                ? require('../images/IconTab/newspaper-black.png')
                                : require('../images/IconTab/newspaper.png');
                        } else if (route.name === 'Order') {
                            iconName = focused 
                            ? require('../images/IconTab/shopping-bag-black.png')
                            : require('../images/IconTab/shopping-bag.png');
                        }
                         else if (route.name === 'Shop') {
                            iconName = focused 
                            ? require('../images/IconTab/home.png')
                            : require('../images/IconTab/home-white.png');
                        }
                         else if (route.name === 'User') {
                            iconName = focused 
                            ? require('../images/IconTab/user-black.png')
                            : require('../images/IconTab/user.png');
                        }

                        // You can return any component that you like here!
                        return <Image source={iconName} style={{width:30,height:30}} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'black',
                }}
            >
                <RootStack.Screen name="News" component={NewsScreen} />
                <RootStack.Screen name="Order" component={OrderScreen} />
                <RootStack.Screen name="Shop" component={ShopScreen} />
                <RootStack.Screen name="User" component={UserScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
   }
}