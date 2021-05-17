import React, {component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

function Login(props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginTop: height * 0.05,
          width,
          height: height * 0.08,
          //  backgroundColor: 'pink',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            padding: 5,
            color: 'black',
            // alignSelf: 'flex-start',
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 40,
            color: 'black',
            // backgroundColor:'pink'
          }}>
          Login
        </Text>
      </View>
      <Text
        style={{
          padding: 5,
          color: 'black',
          // alignSelf: 'flex-start',
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize: 25,
          color: 'gray',
          // backgroundColor:'pink'
        }}>
        Please Sign in to continue.
      </Text>
      <View
        style={{
          marginTop: height * 0.05,
          width: width * 0.9,
          height: height * 0.3,
          // backgroundColor: 'pink',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: width * 0.85,
            height: height * 0.09,
            // backgroundColor: 'pink',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            flexDirection: 'row',
          }}>
          <EntypoIcon name="mail" size={30} color="gray" />
          <TextInput
            style={{
              marginTop: 1,
              marginLeft: 5,
              alignSelf: 'center',
              width: width * 0.75,
              height: height * 0.07,
              // backgroundColor: 'pink',
            }}
            placeholder="EMAIL"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            marginTop: 20,
            width: width * 0.85,
            height: height * 0.09,
            // backgroundColor: 'pink',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            flexDirection: 'row',
          }}>
          <EntypoIcon name="lock" size={30} color="gray" />
          <TextInput
            style={{
              marginTop: 1,
              marginLeft: 5,
              alignSelf: 'center',
              width: width * 0.75,
              height: height * 0.07,
              // backgroundColor: 'pink',
            }}
            placeholder="PASSWORD"
            placeholderTextColor="black"
          />
        </View>
      </View>
      <View
        style={{
          marginTop: height * 0.03,
          width,
          height: height * 0.1,
          //  backgroundColor: 'pink',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Details')}
          style={{
            width,
            height: height * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'rgba(255, 224, 178, 0.7)',
            shadowOffset: {width: 7, height: 7},
            elevation: 3,
            shadowOpacity: 5,
            flexDirection: 'row',
          }}>
          <LinearGradient
            colors={['#FFF176', '#FFC107', '#FF9800']}
            style={{
              width: width * 0.45,
              height: height * 0.08,
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              marginLeft: width * 0.3,
              borderRadius: 30,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: 'white',
              }}>
              LOGIN
            </Text>
            <AntIcon
              name="arrowright"
              style={{marginLeft: 10, fontSize: height * 0.05, color: 'white'}}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('')}>
        <View
          style={{
            marginTop: height * 0.19,
            width: width * 0.97,
            height: height * 0.06,
            //  backgroundColor: 'yellow',
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 20,
              color: 'gray',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
            <Text
              style={{
                marginLeft: 7,
                color: 'black',
                alignSelf: 'center',
                textAlign: 'right',
                fontWeight: 'bold',
                fontSize: 26,
                color: '#e91e',
                padding:10
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default Login;
