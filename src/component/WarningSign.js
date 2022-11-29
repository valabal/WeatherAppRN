import React from 'react';
import {View, Text, Dimensions, Button} from 'react-native';
import PropTypes, {any} from 'prop-types';

export default function WarningSign(props) {
  if (!props.alertWarning) {
    return <View />;
  }
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#00000080',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
      }}>
      <View style={{backgroundColor: '#fff', margin: 20, borderRadius: 10}}>
        <Text
          style={{
            fontSize: 25,
            alignSelf: 'center',
            color: '#f00',
            padding: 10,
          }}>
          ERROR
        </Text>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            padding: 10,
            marginTop: -20,
          }}>
          <Text
            style={{
              fontSize: 15,
              alignSelf: 'center',
            }}>
            {props.alertWarning}
          </Text>
        </View>
        <Button
          title="OK"
          onPress={props.onPress}
          style={{padding: 10}}></Button>
      </View>
    </View>
  );
}

WarningSign.propTypes = {
  alertWarning: PropTypes.objectOf(String),
  onPress: PropTypes.func.isRequired,
};
