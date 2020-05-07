import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

class Covid extends React.Component{
    constructor(){
        super();
        this.state = {positive:'', sembuh:'', meninggal:''}
    }

    componentDidMount = () => {
        this.getDataApiGlobal();
    }
    getDataApiGlobal = async () => {
        const response = await fetch('https://covid19.mathdro.id/api')
        const json = await response.json()
            this.setState({positive: json.confirmed.value})
            this.setState({sembuh: json.recovered.value})
            this.setState({meninggal: json.deaths.value})
            console.log(json)
    }
    
    render(){
        return(
            <View>
                <View style={{ marginTop: 40, marginBottom: 40 }}></View>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, height: 115,  backgroundColor: '#ffff00', borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                    <Image style={{alignSelf:"center", width: 60, height: 60}}
                            source={{ uri: 'https://ya-webdesign.com/transparent250_/how-to-add-a-png-to-a-photo-8.png'}}/>
                        <Text style={{color: 'black', fontSize: 20, alignSelf:"center"}}>Positif</Text>
                        <Text style={{color: 'black', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.positive}</Text>
                    </View>

                    <View style={{flex: 1, height: 115,  backgroundColor: '#00ff7f', borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                    <Image style={{alignSelf:"center", width: 60, height: 60}}
                            source={{ uri: 'https://ya-webdesign.com/transparent250_/health-care-png-10.png'}}/>
                        <Text style={{color: 'black', fontSize: 20, alignSelf:"center"}}>Sembuh</Text>
                        <Text style={{color: 'black', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.sembuh}</Text>
                    </View>

                    <View style={{flex: 1, height: 115,  backgroundColor: '#ff0000', borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                    <Image style={{alignSelf:"center", width: 60, height: 60}}
                            source={{ uri: 'https://ya-webdesign.com/transparent250_/morgue.png'}}/>
                        <Text style={{color: 'black', fontSize: 20, alignSelf:"center"}}>Meninggal</Text>
                        <Text style={{color: 'black', fontSize: 20, fontWeight:'bold', alignSelf:"center"}}>{this.state.meninggal}</Text>
                    </View>

                </View>
            </View>
        )

    }
    
}

export default Covid;

