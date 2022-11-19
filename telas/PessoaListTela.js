import { StyleSheet } from 'react-native'
import React from 'react'
import PessoaListComponente from '../componentes/PessoaListComponente'

const PessoaListTela = ({navigation}) => {
  return (
    <PessoaListComponente navigation={navigation}/>
  )
}

export default PessoaListTela

const styles = StyleSheet.create({})