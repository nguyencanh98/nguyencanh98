import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet, TouchableOpacity, FlatList, ScrollView
} from 'react-native';

export class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNews: [
                {
                    imageNews: require('../images/ImageData/sinh_to_xoai.jpg'),
                    titleNews: "'Mua hai tặng một'-Vừa khỏe vừa vui",
                    noteNews: "Ngại ra đường vẫn có thể nạp 'C' tăng sức đề kháng sương sương"
                },
                {
                    imageNews: require('../images/ImageData/tra_buoi_lanh.jpg'),
                    titleNews: "'Mua hai tặng một'-Vừa khỏe vừa vui",
                    noteNews: "Ngại ra đường vẫn có thể nạp 'C' tăng sức đề kháng sương sương"
                },
                {
                    imageNews: require('../images/ImageData/tra_dao_cam_sa.jpg'),
                    titleNews: "'Mua hai tặng một'-Vừa khỏe vừa vui",
                    noteNews: "Ngại ra đường vẫn có thể nạp 'C' tăng sức đề kháng sương sương"
                },
                {
                    imageNews: require('../images/ImageData/tra_vai.jpg'),
                    titleNews: "'Mua hai tặng một'-Vừa khỏe vừa vui",
                    noteNews: "Ngại ra đường vẫn có thể nạp 'C' tăng sức đề kháng sương sương"
                },
            ]
        }
    }
    _renderItem = ({ item, index }) => {
        const { containerItem, imageNews, titleNews, noteNews, buttonOrder, textOrder } = styles;
        const { navigation } = this.props;
        return (
            <View style={containerItem}>
                <TouchableOpacity>
                    <Image source={item.imageNews} style={imageNews} />
                    <Text style={titleNews}>{item.titleNews}</Text>
                    <Text style={noteNews}>{item.noteNews}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonOrder} onPress={() => navigation.navigate('Order')}>
                    <Text style={textOrder}>Order ngay</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderItem1 = ({ item, index }) => {
        const { containerItem, imageNews, titleNews, noteNews, buttonOrder, textOrder } = styles;
        const { navigation } = this.props;
        return (
            <View style={containerItem}>
                <TouchableOpacity>
                    <Image source={item.imageNews} style={imageNews} />
                    <Text style={titleNews}>{item.titleNews}</Text>
                    <Text style={noteNews}>{item.noteNews}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonOrder} >
                    <Text style={textOrder}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        const { navigation } = this.props;
        const { dataNews } = this.state;
        const { container, Header, leftHeader, imageHeader, textHeader, name, note, rightHeader, bell,
            banner, imageBanner, textBanner, button,
            contaimusic, music, singer, song, textTitle, nameSinger,
            whatnews, listNews,
        } = styles;
        return (
            <View style={container}>
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
                <ScrollView>
                    <View style={banner}>
                        <TouchableOpacity style={button}>
                            <Image source={require('../images/ImageData/sinh_to_xoai.jpg')} style={imageBanner} />
                            <Text style={textBanner}>Tích điểm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button} onPress={() => navigation.navigate('Order')}>
                            <Image source={require('../images/ImageData/tra_buoi_lanh.jpg')} style={imageBanner} />
                            <Text style={textBanner}>Đặt hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Image source={require('../images/ImageData/tra_dao_cam_sa.jpg')} style={imageBanner} />
                            <Text style={textBanner}>Coupon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Image source={require('../images/ImageData/tra_vai.jpg')} style={imageBanner} />
                            <Text style={textBanner}>Đổi ưu đãi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={music}>
                        <Text style={textTitle}>Nhạc đang phát tại Nhà</Text>
                        <TouchableOpacity style={contaimusic}>
                            <Image source={require('../images/lisa.png')} style={singer} />
                            <View>
                                <Text style={song}>Khong cam xuc</Text>
                                <Text style={nameSinger}>Ho Quang Hieu</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={whatnews}>
                        <Text style={{ fontSize: 16, marginHorizontal: 10, marginVertical: 10, }}>What's News</Text>
                        <View style={listNews}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={dataNews}
                                renderItem={this._renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                    <View style={whatnews}>
                        <Text style={{ fontSize: 16, marginHorizontal: 10, marginVertical: 10, }}>Tin tức</Text>
                        <View style={listNews}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={dataNews}
                                renderItem={this._renderItem1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    banner: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'space-around', alignItems: 'center',
        marginTop: 10,
        paddingVertical: 10,
    },
    button: {
        alignItems: 'center',
    },
    imageBanner: {
        width: 90, height: 90,
        borderRadius: 30,
    },
    textBanner: {
        fontSize: 14,
        color: 'black',
    },
    music: {},
    textTitle: {
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    contaimusic: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 15,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    singer: {
        width: 70, height: 70,
        marginLeft: 30,
        marginRight: 10,
        borderRadius: 40,
        marginVertical: 5,
    },
    song: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    nameSinger: {
        color: 'tomato'
    },
    containerItem: {
        width: 200,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: 15,
    },
    imageNews: {
        width: '100%', height: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    titleNews: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    noteNews: {
        color: 'gray',
        fontSize: 14,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    buttonOrder: {
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 50,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'tomato'
    },
    textOrder: {
        marginHorizontal: 10,
        marginVertical: 5,
        color: 'tomato',
        fontSize: 14
    },
})