import React, { Component } from 'react';

import I18n from '../../languages/i18n';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import views from '../../styles/views';
import { Colors } from '../../styles/colors'
import buttons from '../../styles/button';

import codePush from 'react-native-code-push';

export default class OnlineScreen extends Component {
  state = {
    appdata: null,
  };
  componentDidMount(){
    codePush.getCurrentPackage().then((data) =>{
      this.setState({
        appdata:data,
      });
    });
  }
  render() {
    const { navigate } = this.props.navigation

    return(
      <ImageBackground source={require('../../images/default.jpg')} blurRadius={3} style={views.container}>
        <View style={views.container}>
          <Text h1>Tic Tac Toe</Text>

        </View>
        <View style={[buttons.buttonGroup]}>
          <View style={[views.container, views.buttonGroupView, {marginBottom: 0}]}>
            <Text h2 style={{color:'#E8E2B3'}}>{I18n.t('info.info')}</Text>
          </View>
          <View style={[views.container,{flex:4}]}>
            <TouchableOpacity
              style={[
                buttons.DefaultBtn,
                {backgroundColor: Colors.lightPurple}
              ]}
              onPress={() => navigate('About')}
            >
              <Text h3 style={{color:'white'}}>{I18n.t('info.about')}</Text>
            </TouchableOpacity>
            {/*}<TouchableOpacity
              style={[
                buttons.DefaultBtn,
                {backgroundColor: Colors.lightPurple}
              ]}
              onPress={() => navigate('Version')}
            >
              <Text h3 style={{color:'white'}}>{I18n.t('info.updateSettings')}</Text>
            </TouchableOpacity>*/}
            <TouchableOpacity
              style={[
                buttons.DefaultBtn,
                {backgroundColor: Colors.lightPurple}
              ]}
              onPress={() => navigate('Disclaimer')}
            >
              <Text h3 style={{color:'white'}}>{I18n.t('info.disclaimer')}</Text>
            </TouchableOpacity>
          </View>
          {this.state.appdata?this._renderVersion():null}

        </View>
      </ImageBackground>
    )
  }
  _renderVersion = () =>{
    // console.log(this.state.appdata);
    return (
      <View style={[views.container,{flex:1}]}>
        <Text h3 style={{ textAlign: 'center', width:'90%', fontSize: 22}}>{'Version:'+this.state.appdata.appVersion}</Text>
        <Text h3 style={{ textAlign: 'center', width:'90%', fontSize: 22}}>{'Build:'+this.state.appdata.label}</Text>
      </View>
    )
  }
}
