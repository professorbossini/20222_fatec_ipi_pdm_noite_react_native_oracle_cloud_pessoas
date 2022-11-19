import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  Button,
  Card
} from '@rneui/themed-edge'

const PessoaAddComponente = ({navigation}) => {
  return (
    <>
      <Card>
        <Card.Title>Cadastro de pessoas</Card.Title>
        <Card.Divider/>
        <Button 
          title='OK'
          onPress={() => navigation.navigate('PessoaList')}
        />
      </Card>
    </>
  )
}

export default PessoaAddComponente

const styles = StyleSheet.create({})