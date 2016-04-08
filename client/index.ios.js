/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Form from 'react-native-form';

require('./helpers/request-helpers.js');

class hurryup extends Component {

  buttonClicked() {
    var values = this.refs.form.getValues();
    console.log(values);
    sendEvent(values);
  }

  render() {
    return (
        <View style={styles.container}>
        <Form ref='form'>
          <Text style={styles.welcome}>
            Hurry Up!
          </Text>

          <Text style={styles.instructions}>
            Your Event:
          </Text>
          <View>
            <TextInput
              style={styles.eventName}
              type='TextInput'
              name="eventName"
              placeholder='Cool Party'/>
          </View>

          <Text style={styles.instructions}>
            Event Location:
          </Text>
          <View>
            <TextInput
              style={styles.eventName}
              type='TextInput'
              name="destination"
              placeholder='SomePlace'/>
          </View>

          <Text style={styles.instructions}>
            Event Time:
          </Text>
          <View>
            <TextInput
              style={styles.eventName}
              type='TextInput'
              name="eventTime"
              placeholder='1800'/>
          </View>

          <Text style={styles.instructions}>
            How Early Do You Want To Get There:
          </Text>
          <View>
            <TextInput
              style={styles.eventName}
              type='TextInput'
              name="earlyArrival"
              placeholder='5 min'/>
          </View>

          <Text style={styles.instructions}>
            How Are You Getting There:
          </Text>
          <View>
            <TextInput
              style={styles.eventName}
              type='TextInput'
              name="mode"
              placeholder='driving, transit, walking' />
          </View>
        </Form>

        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonClicked.bind(this)}>
          <View>
            <Text style={styles.buttonText}>Submit!</Text>
          </View>
        </TouchableHighlight>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b37a',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    eventName: {
      backgroundColor: 'white',
      color: 'black',
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      width: 200
  },
});

AppRegistry.registerComponent('hurryup', () => hurryup);
