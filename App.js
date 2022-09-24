import React from "react";
import * as Location from 'expo-location';
import {Alert} from "react-native";
import Loading from "./src/сomponents/Loading/Loading";
import axios from "axios";
import Weather from "./src/сomponents/Weather/Weather";
const API_KEY = '784371cc41bfb9e9ac06fcad948f117a';

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main
    });
  }
  
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);


    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Попробуйте позднее');
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
    )
  }
};
