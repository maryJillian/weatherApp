import React from "react";
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, StatusBar} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'thunderstorm',
    gradient: ['#4b6cb7', '#182848'],
    title: 'Оставайтесь дома',
    subtitle: 'Вы видите, что на улице?'
  },
  Rain: {
    iconName: 'rainy',
    gradient: ['#ADA996', '#F2F2F2', '#DBDBDB'],
    title: 'На улице дождь',
    subtitle: 'А значит, скоро будет радуга!'
  },
  Snow: {
    iconName: 'snow',
    gradient: ['#E8CBC0', '#636FA4'],
    title: 'На улице идет снежок',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков'
  },
  Clouds: {
    iconName: 'cloud',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'Облака',
    subtitle: 'Белогривые лошадки'
  }
}
const Weather = ({temp, condition}) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <View style={styles.halfContainer}>
        <Ionicons name={weatherOptions[condition].iconName} size={96} color={'#ffffff'}/>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>

        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Rain', 'Snow', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 50,
    color: '#ffffff'
  },
  title: {
   color: '#ffffff',
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 15,
    textAlign: 'left'
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left'
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
})

export default Weather;
