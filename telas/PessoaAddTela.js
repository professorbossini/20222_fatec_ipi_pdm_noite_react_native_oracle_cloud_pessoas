import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PessoaAddComponente from '../componentes/PessoaAddComponente'

const PessoaAddTela = ({navigation}) => {
  return (
    <PessoaAddComponente navigation={navigation}/>
  )
}

export default PessoaAddTela

const styles = StyleSheet.create({})