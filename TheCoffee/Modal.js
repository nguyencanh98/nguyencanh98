import React, { Component } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isOpen: false,
        }

    }
    _onPress = (isOpen) => {
        this.setState({ isOpen: true });
    }
    render() {
        const { visible } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this._onPress}>
                    <Text>Click show modal</Text>
                </TouchableOpacity>
                <Modal
                    position='center'
                    visible={false}
                >
                    <View style={styles.AddModal}>
                        <Text>Show modal Add</Text>
                        <TouchableOpacity>
                            <Text>Close modal</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    AddModal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})