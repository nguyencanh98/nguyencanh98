import React, { Component } from 'react';
import {
    View, Text,
    TouchableOpacity, StyleSheet, Image
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PopularScreen } from '../childComponents/PopularComponent';
import { DrinkScreen } from '../childComponents/DrinkComponent';
import { FoodScreen } from '../childComponents/FoodComponent';
const Tab = createMaterialTopTabNavigator();
export class OrderScreen extends Component {
    render() {
        const { navigation } = this.props;
        const { container, CustomHeader, leftHeader, imageHeader, textHeader, rightHeader } = styles;
        return (
            <View style={container}>
                <TouchableOpacity style={CustomHeader}>
                    <View style={leftHeader}>
                        <Image source={require('../images/IconTab/user.png')} style={imageHeader} />
                        <View style={textHeader}>
                            <Text style={{ fontSize: 14, }}>Giao hàng đến</Text>
                            <Text style={{ fontSize: 16, color: 'gray', fontWeight: 'bold' }}>Nhập địa chỉ giao hàng</Text>
                        </View>
                    </View>
                    <View style={rightHeader}>
                        <Text style={{ fontSize: 16, color: 'tomato' }}>THAY ĐỔI</Text>
                    </View>
                </TouchableOpacity>
                <Tab.Navigator
                        swipeEnabled = {false}
                        initialRouteName="Popular"
                        tabBarOptions={{
                            labelStyle: { fontSize: 14 },
                            activeTintColor: 'gray',
                            
                        }}
                    >
                        <Tab.Screen name="Popular" component={PopularScreen} options={{ tabBarLabel: 'Phổ biến' }} />
                        <Tab.Screen name="Drink" component={DrinkScreen} options={{ tabBarLabel: 'Thức uống' }} />
                        <Tab.Screen name="Food" component={FoodScreen} options={{ tabBarLabel: 'Đồ ăn' }} />
                    </Tab.Navigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, },
    CustomHeader: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'space-between', alignItems: 'center',
        borderBottomWidth: 1, borderBottomColor: 'gray',
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    imageHeader: {
        width: 30, height: 30,
        marginHorizontal: 5
    },
    textHeader: {
        marginHorizontal: 5
    },
    rightHeader: {
        marginHorizontal: 20,
    }
})