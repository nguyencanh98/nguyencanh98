import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView
} from 'react-native';
import Modal from 'react-native-modalbox';
export class PopularScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNews: [
                {
                    imageNews: require('../images/ImageData/sinh_to_xoai.jpg'),
                    titleNews: "Sinh tố xoài ",
                    gia: "50.000đ",
                    size: "Nhỏ"
                },
                {
                    imageNews: require('../images/ImageData/tra_buoi_lanh.jpg'),
                    titleNews: "Trà bưởi lạnh",
                    gia: "40.000đ",
                    size: "Vừa"
                },
                {
                    imageNews: require('../images/ImageData/tra_dao_cam_sa.jpg'),
                    titleNews: "Trà đào cam sả",
                    gia: "45.000đ",
                    size: "Lớn"
                },
                {
                    imageNews: require('../images/ImageData/tra_vai.jpg'),
                    titleNews: "Trà vải",
                    gia: "55.000đ",
                    size: "Nhỏ"
                },
                {
                    imageNews: require('../images/ImageData/sinh_to_xoai.jpg'),
                    titleNews: "Sinh tố xoài ",
                    gia: "50.000đ",
                    size: "Nhỏ"
                },
                {
                    imageNews: require('../images/ImageData/tra_buoi_lanh.jpg'),
                    titleNews: "Trà bưởi lạnh",
                    gia: "40.000đ",
                    size: "Vừa"
                },
                {
                    imageNews: require('../images/ImageData/tra_dao_cam_sa.jpg'),
                    titleNews: "Trà đào cam sả",
                    gia: "45.000đ",
                    size: "Lớn"
                },
                {
                    imageNews: require('../images/ImageData/tra_vai.jpg'),
                    titleNews: "Trà vải",
                    gia: "55.000đ",
                    size: "Nhỏ"
                },
            ]

        }
    }
    _renderItem = ({ item, index }) => {
        const { containerItem, imageNews, titleNews, textList, note, buttonOrder, textButton } = styles;
        return (
            <TouchableOpacity style={containerItem}>
                <Image source={item.imageNews} style={imageNews} />
                <Text style={titleNews}> {item.titleNews}</Text>
                <View style={note}>
                    <View style={textList}>
                        <Text style={{ color: 'tomato', marginHorizontal: 5 }}>{item.size}</Text>
                        <Text style={{ color: 'gray' }}>{item.gia}</Text>
                    </View>
                    <TouchableOpacity style={buttonOrder} ><Text style={textButton}>Order</Text></TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    _renderItem1 = ({ item, index }) => {
        const { containerItem1, imageNews, titleNews, textList, note, buttonOrder, textButton } = styles;
        return (
            <TouchableOpacity style={containerItem1}>
                <Image source={item.imageNews} style={imageNews} />
                <Text style={titleNews}> {item.titleNews}</Text>
                <View style={note}>
                    <View style={textList}>
                        <Text style={{ color: 'tomato', marginHorizontal: 5 }}>{item.size}</Text>
                        <Text style={{ color: 'gray' }}>{item.gia}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { container, listHorizontal, listColumn, text, list } = styles;
        const { dataNews } = this.state;
        return (
            <ScrollView>
                <View style={container}>
                    <View style={listHorizontal}>
                        <Text style={text}>Có thể bạn thích</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={dataNews}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={listColumn}>
                        <Text style={text}>Món mới</Text>
                        <View style={list}>
                            <FlatList
                                horizontal={false}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                data={dataNews}
                                renderItem={this._renderItem1}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>

                    </View>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listHorizontal: {

    },
    text: {
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    containerItem: {
        marginHorizontal: 5,
        backgroundColor: 'rgba(255,255,255,1)',
        width: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    imageNews: {
        width: '100%', height: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    titleNews: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    note: {
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center',
    },
    textList: {
        flexDirection: 'row',
        fontSize: 14,
        marginVertical: 10,
    },
    buttonOrder: {
        marginHorizontal: 10,
        borderColor: 'tomato',
        borderWidth: 1,
        borderRadius: 15,
    },
    textButton: {
        marginHorizontal: 5,
        marginVertical: 3,
        fontSize: 14,
        color: 'tomato'
    },
    listColumn: {
        flex: 1,
        marginBottom: 10,
    },
    list: {
        flex: 1,
        alignItems: 'center',
    },
    containerItem1: {
        marginHorizontal: 10,
        marginVertical: 15,
        backgroundColor: 'rgba(255,255,255,1)',
        width: 180,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }
})