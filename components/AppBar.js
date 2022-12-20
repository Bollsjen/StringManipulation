import React, {useEffect, useState} from 'react'
import { Keyboard, KeyboardAvoidingView, TextInput, StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const AppBar = (props) => {
        return (
        <View style={styles.titleView}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleView: {
        backgroundColor: '#FFF',
        borderBottomColor: '#AFAFAF',
        borderBottomWidth: 1,
    }
})

export default AppBar