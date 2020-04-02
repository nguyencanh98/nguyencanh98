import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet, TouchableOpacity, FlatList, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export class UserScreen extends Component {
    render() {
        const { container, Header, leftHeader, imageHeader, textHeader, name, note, rightHeader, bell,
            body, button, text, icon,
        } = styles;
        return (

            <View style={container} >
                <View style={Header}>
                    <TouchableOpacity style={leftHeader}>
                        <Image source={require('../images/ImageData/sinh_to_xoai.jpg')} style={imageHeader} />
                        <View style={textHeader}>
                            <Text style={name}>Cảnh Nguyễn</Text>
                            <Text style={note}>Khách hàng mới</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={rightHeader}>
                        <Image source={require('../images/IconTab/bell.png')} style={bell} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TouchableOpacity style={button}>
                        <Icon name='star-o' style={icon} />
                        <Text style={text}>The Coffee House Rewards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <Icon name='user-o' style={icon} />
                        <Text style={text}>Thông tin tài khoản</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <Icon name='music' style={icon} />
                        <Text style={text}>Nhạc đang phát</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <Icon name='history' style={icon} />
                        <Text style={text}>Lịch sử</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <MaterialIcons name='payment' style={icon} />
                        <Text style={text}>Thanh toán</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <MaterialIcons name='help-outline' style={icon} />
                        <Text style={text}>Giúp đỡ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <MaterialIcons name='settings' style={icon} />
                        <Text style={text}>Cài đặt</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={{ fontSize: 16 }}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    leftHeader: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
    },
    imageHeader: {
        width: 60, height: 60,
        borderRadius: 30,
        marginRight: 5
    },
    name: {
        color: 'tomato',
        fontSize: 20
    },
    rightHeader: {
        marginRight: 15,
    },
    bell: {
        width: 30, height: 30,
    },
    body: {
        marginTop: 10,
        backgroundColor: 'white',

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    icon: {
        fontSize: 24,
        color: 'gray',
        marginHorizontal: 10,
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
    },
})