import React from 'react';
import { View, Text } from 'react-native';

const Greeting = props => {
    return  <View style={{ flex: 1, marginTop: 30, marginBottom: 10 }}>
                <Text style={{ alignSelf: 'center', fontSize: 23, fontWeight:'bold' }}>Data COVID-19 Global & Indonesia</Text>
            <View style={{ flex: 1, marginTop: 10, marginBottom: 10 }}></View>
                <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight:'bold' }}>Global</Text>
            </View>
}

export default Greeting;