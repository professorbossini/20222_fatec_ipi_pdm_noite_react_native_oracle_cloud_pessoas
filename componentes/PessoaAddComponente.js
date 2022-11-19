import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
  Button,
  Card,
  Input
} from '@rneui/themed-edge'

const PessoaAddComponente = ({navigation}) => {
  const [state, setState] = 
    useState({nome: '', idade: '', hobby: ''})

  const addPessoa = () => {
    console.log(state)
  }
  return (
    <>
      <Card
        containerStyle={styles.card}>
        <Card.Title>Cadastro de pessoas</Card.Title>
        <Card.Divider/>
        <Input
          style={styles.textInput} 
          placeholder='Digite o nome'
          leftIcon={{
            type: 'font-awesome',
            name: 'user'
          }}
          onChangeText={nome => setState({...state, nome})}
          value={state.nome}
        />
        <Input 
          style={styles.textInput}
          placeholder='Digite a idade'
          leftIcon={{
            type: 'font-awesome',
            name: 'calendar'           
          }}
          onChangeText={idade => setState({...state, idade})}
          value={state.idade}
        />
        <Input 
          style={styles.textInput}
          placeholder='Digite o hobby'
          leftIcon={{
            type: 'font-awesome',
            name: 'heart'
          }}
          onChangeText={hobby => setState({...state, hobby})}
          value={state.hobby}
        />
        <Button
          buttonStyle={styles.button} 
          title='Cadastrar'
          onPress={addPessoa}/>           
      </Card>
    </>
  )
}
export default PessoaAddComponente

const styles = StyleSheet.create({
  button: {
    borderRadius: 8
  },  
  textInput: {
    textAlign: 'center'
  },
  card: {
    borderRadius: 12
  }
})