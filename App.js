import React, {useEffect, useState} from 'react'
import { Keyboard, KeyboardAvoidingView, TextInput, StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import AppBar from './components/AppBar'
import AppContainer from './components/AppContainer'

export default function App() {
  const [word, setWord] = useState()

  const LowerCase = () => {
    setWord(word.toLowerCase())
  }

  const UpperCase = () => {
    setWord(word.toUpperCase())
  }

  const Capitalize = () => {
    let wordCopy = word
    wordCopy.charAt(0).toUpperCase()
    setWord(wordCopy.charAt(0).toUpperCase() + word.slice(1))
  }

  const Reverse = () => {
    let wordCopy = word
    let wordArray = word.split("")
    wordArray.reverse()
    setWord(wordArray.join(""))
  }

  return (
    <AppContainer appBar={<AppBar title={'String Manipulation'}/>}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.textInputView}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.input} placeholder={'Skriv et ord...'} value={word} onChangeText={text => setWord(text)}/>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button title='LOWER CASE' style={styles.button} onPress={() => LowerCase()}/>
          </View>

          <View style={styles.buttonView}>
            <Button title='UPPER CASE' style={styles.button} onPress={() => UpperCase()}/>
          </View>

          <View style={styles.buttonView}>
            <Button title='CAPITALIZED' style={styles.button} onPress={() => Capitalize()}/>
          </View>

          <View style={styles.buttonView}>
            <Button title='REVERSED' style={styles.button} onPress={() => Reverse()}/>
          </View>
        </View>

        <View>
          <Text>{word}</Text>
        </View>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 12,
  },
  textInputView: {

  },
  textInputContainer:{
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
  },
  input: {
    backgroundColor: '#FFF',
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    marginTop: 16
  },
  buttonView: {
    marginBottom: 8,
  }
});
