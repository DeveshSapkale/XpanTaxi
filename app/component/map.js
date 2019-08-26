import React, { Component } from "react";
import { Text, Image, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import DestinationButton from './DestinationButton';
import CurrentLocationButton from './CurrentLocationButton';
import Testapp from '../Test/Testapp';
import {Ionicons} from '@expo/vector-icons';
export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        }

        this._getLocationAsync();
    }
     static navigationOptions = {
         title: 'Maps View',
         drawerIcon: ({focused})=>(<Ionicons name="md-home" size={24} color={focused?'blue':'black'} />),
     };
    _getLocationAsync = async () => {
        console.log("GetLocations Async");
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted')
            console.log('Permission not granted');

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0322
        }
        this.setState({ region: region });
    }
    async componentDidMount() {
        // const { status } = await Permissions.getAsync(Permissions.LOCATION);

        // if (status !== 'granted') {
        //     const response = await Permissions.askAsync(Permissions.LOCATION);
        // }

        // navigator.geolocation.watchPosition(
        //     position => {
        //         this.setState((prevState) => ({
        //             region: {
        //                 ...prevState.region,
        //                 latitude: position.latitude,
        //                 longitude: position.longitude
        //             }
        //         }));
        //     },
        //     error => {

        //     },
        //     { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000 }
        // )
    }
    centerMap(){
        const {latitude,longitude,latitudeDelta,longitudeDelta} = this.state.region;
        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        });
    }
    render() {
        return (
            <View>
                <DestinationButton/>
                <CurrentLocationButton cb={()=>{this.centerMap()}}/>
                <MapView style={Styles.map}
                    initialRegion={this.state.region}
                    showsCompass={true}
                    showsUserLocation={true}
                    rotateEnabled={false}
                    ref={(map)=>this.map = map}
                />
            </View>

        );
    }
    onRegionChange(region) {
        this.setState({ region });
    }
}

const Styles = StyleSheet.create(
    {
        map: {
            position: 'absolute',
            left: 1,
            top: 0,
            right: 0,
            bottom: 0
        },
        container: {
            flex: 1,
            top: 0,
            opacity: 1
        }

    }
);