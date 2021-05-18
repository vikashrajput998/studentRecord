import React, {component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

function FormPage(props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          // marginTop: height * 0.01,
          width: width * 1,
          height: height * 0.06,
          alignItems: 'center',
          flexDirection: 'row',
          // backgroundColor:'pink'
        }}>
        <View>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() => props.navigation.goBack()}>
            <AntIcon
              name="arrowleft"
              style={{fontSize: height * 0.05, color: 'gray'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            //  backgroundColor: 'pink',
            width: width * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: 'gray',
            }}>
            Add Form
          </Text>
        </View>
      </View>
      <View
        style={{
          width: width * 0.95,
          height: height * 0.84,
          //   backgroundColor: 'pink',
          alignSelf: 'center',
        //   shadowColor: 'rgba(255, 22, 17, 0.7)',
          shadowColor:'rgba(255, 224, 178, 0.7)',
          shadowOffset: {width: 7, height: 3},
          elevation: 3,
          shadowOpacity: 5,
        }}>
        <View
          style={{
            width: width * 0.91,
            height: height * 0.093,
            backgroundColor: 'rgba(255, 224, 178, 0.6)',
            alignSelf: 'center',
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.093,
              backgroundColor: '#FFC107',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.18,
                height: height * 0.09,
                alignSelf: 'center',
              }}
              source={require('./Assets/pencl.png')}
            />
          </View>
          <AntIcon
            name="caretright"
            style={{fontSize: height * 0.025, marginLeft: -7, color: '#FFC107'}}
          />
          <TextInput
            style={{
              width: width * 0.66,
              height: height * 0.082,
              //   backgroundColor: 'pink',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'gray',
            }}
            placeholder="Education"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            width: width * 0.91,
            height: height * 0.093,
            backgroundColor: 'rgba(255, 224, 178, 0.6)',
            alignSelf: 'center',
            marginTop: 7,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.093,
              backgroundColor: '#FFC107',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.18,
                height: height * 0.09,
                alignSelf: 'center',
              }}
              source={require('./Assets/pencl.png')}
            />
          </View>
          <AntIcon
            name="caretright"
            style={{fontSize: height * 0.025, marginLeft: -7, color: '#FFC107'}}
          />
          <TextInput
            style={{
              width: width * 0.66,
              height: height * 0.082,
              //   backgroundColor: 'pink',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'gray',
            }}
            placeholder="Experience"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            width: width * 0.91,
            height: height * 0.093,
            backgroundColor: 'rgba(255, 224, 178, 0.6)',
            alignSelf: 'center',
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.093,
              backgroundColor: '#FFC107',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.18,
                height: height * 0.09,
                alignSelf: 'center',
              }}
              source={require('./Assets/pencl.png')}
            />
          </View>
          <AntIcon
            name="caretright"
            style={{fontSize: height * 0.025, marginLeft: -7, color: '#FFC107'}}
          />
          <TextInput
            style={{
              width: width * 0.66,
              height: height * 0.082,
              //   backgroundColor: 'pink',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'gray',
            }}
            placeholder="Location"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            width: width * 0.91,
            height: height * 0.093,
            backgroundColor: 'rgba(255, 224, 178, 0.6)',
            alignSelf: 'center',
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.093,
              backgroundColor: '#FFC107',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.18,
                height: height * 0.09,
                alignSelf: 'center',
              }}
              source={require('./Assets/pencl.png')}
            />
          </View>
          <AntIcon
            name="caretright"
            style={{fontSize: height * 0.025, marginLeft: -7, color: '#FFC107'}}
          />
          <TextInput
            style={{
              width: width * 0.66,
              height: height * 0.082,
              //   backgroundColor: 'pink',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'gray',
            }}
            placeholder="Mode of Teaching"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            width: width * 0.91,
            height: height * 0.093,
            backgroundColor: 'rgba(255, 224, 178, 0.6)',
            alignSelf: 'center',
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.093,
              backgroundColor: '#FFC107',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.18,
                height: height * 0.09,
                alignSelf: 'center',
              }}
              source={require('./Assets/pencl.png')}
            />
          </View>
          <AntIcon
            name="caretright"
            style={{fontSize: height * 0.025, marginLeft: -7, color: '#FFC107'}}
          />
          <TextInput
            style={{
              width: width * 0.66,
              height: height * 0.082,
              //   backgroundColor: 'pink',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'gray',
            }}
            placeholder="Charges(per hour)"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            width: width * 0.91,
            height: height * 0.093,
            backgroundColor: 'rgba(255, 224, 178, 0.6)',
            alignSelf: 'center',
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.093,
              backgroundColor: '#FFC107',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.18,
                height: height * 0.09,
                alignSelf: 'center',
              }}
              source={require('./Assets/pencl.png')}
            />
          </View>
          <AntIcon
            name="caretright"
            style={{fontSize: height * 0.025, marginLeft: -7, color: '#FFC107'}}
          />
          <TextInput
            style={{
              width: width * 0.66,
              height: height * 0.082,
              //   backgroundColor: 'pink',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'gray',
            }}
            placeholder="Gender"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            width: width * 0.91,
            height: height * 0.093,
            backgroundColor: 'rgba(255, 224, 178, 0.6)',
            alignSelf: 'center',
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.093,
              backgroundColor: '#FFC107',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.18,
                height: height * 0.09,
                alignSelf: 'center',
              }}
              source={require('./Assets/pencl.png')}
            />
          </View>
          <AntIcon
            name="caretright"
            style={{fontSize: height * 0.025, marginLeft: -7, color: '#FFC107'}}
          />
          <TextInput
            style={{
              width: width * 0.66,
              height: height * 0.082,
              //   backgroundColor: 'pink',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 0.2,
              borderRadius: 10,
              borderColor: 'gray',
            }}
            placeholder="Subjects"
            placeholderTextColor="gray"
          />
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('')}>
          <LinearGradient
            colors={['#FFF176', '#FFC107', '#FF9800']}
            style={{
                marginTop: 10,
              width: width * 0.7,
              height: height * 0.08,
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              alignSelf:'center',
              borderRadius: 25,
            }}>
            <Text
              style={{
                fontSize: height * 0.035,
                fontWeight: 'bold',
                color: 'white',
              }}>
              SAVE
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default FormPage;
