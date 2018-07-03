import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground, ScrollView, StyleSheet, View, TextInput } from 'react-native';
import { Text } from 'react-native-elements';

import PropTypes from 'prop-types';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Fumi, Sae } from 'react-native-textinput-effects';
import { Colors } from '../../styles/colors'
import I18n from '../../languages/i18n';

import buttons from '../../styles/button';
import views from '../../styles/views';

export default class ContactScreen extends Component {
  state={
    name: '',
    email: '',
    message: '',
  }

  onSendEmail = () =>{
    console.log('123');
  }
  render() {
    return (
      <ImageBackground
        source={require('../../images/default.jpg')}
        style={views.container}
        contentContainerStyle={styles.content}
      >
        <View style={{flex:1}} />
        <View style={[buttons.buttonGroup, {flex: 3}]}>
          <View style={[views.container, views.buttonGroupView]}>
            <Text h2 style={{color:'#E8E2B3'}}>{I18n.t('about.developers')}</Text>
          </View>
          <View style={[views.container,{flex:2}]} >
            <Text h4>Fadi Fayez</Text>
            <Text h4>Kevin Liu</Text>
            <Text h4>Jonathan Chueh</Text>
          </View>
        </View>
        <View style={{flex:1}} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  searchSection: {
    flexDirection: 'row',
    width:'80%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#404d5b',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    // color: 'white',
},
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },

  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});
