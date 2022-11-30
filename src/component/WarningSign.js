import React from 'react';
import {View, Text, Dimensions, Button} from 'react-native';
import PropTypes from 'prop-types';

const Style = {
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  modalContainer: {backgroundColor: '#fff', margin: 20, borderRadius: 10},
  errorTitleStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#f00',
    padding: 10,
  },
  modalContent: {
    height: 100,
    justifyContent: 'center',
    padding: 10,
    marginTop: -20,
  },
  alertWarningLabelStyle: {
    fontSize: 15,
    alignSelf: 'center',
  },
  alertButtonStyle: {padding: 10},
};

export default function WarningSign(props) {
  if (!props.alertWarning) {
    return <View />;
  }
  return (
    <View style={Style.container}>
      <View style={Style.modalContainer}>
        <Text style={Style.errorTitleStyle}>ERROR</Text>
        <View style={Style.modalContent}>
          <Text style={Style.alertWarningLabelStyle}>{props.alertWarning}</Text>
        </View>
        <Button
          title="OK"
          onPress={props.onPress}
          style={Style.alertButtonStyle}
        />
      </View>
    </View>
  );
}

WarningSign.propTypes = {
  alertWarning: PropTypes.any,
  onPress: PropTypes.func.isRequired,
};
