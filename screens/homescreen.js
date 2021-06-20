import React from 'react'
import react from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Modal } from 'react-native'
import db from '../config.js'
import firebase from 'firebase'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
            <TouchableOpacity
            onPress={this.props.navigation.navigate("detailscreen")}>
                <Text>
                    Details
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.props.navigation.navigate("quizscreen")}>
                <Text>
                    Quiz
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}