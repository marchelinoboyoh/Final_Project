import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

class Totalindo extends React.Component{
    constructor(){
        super();
        this.state = {positive:'', sembuh:'', meninggal:'', perawatan: '',update:''}
    }

    componentDidMount = () => {
        this.getDataApiGlobal();
    }
    getDataApiGlobal = async () => {
        const response = await fetch('https://kawalcovid19.harippe.id/api/summary')
        const json = await response.json()
            this.setState({positive: json.confirmed.value})
            this.setState({sembuh: json.recovered.value})
            this.setState({meninggal: json.deaths.value})
            this.setState({perawatan: json.activeCare.value})
            this.setState({update: json.metadata.lastUpdatedAt})

            console.log(json)
    }
    
    render(){
        return(
            <View>
                <View style={{ marginTop: 60, marginBottom: 110 }}></View>
                    <Text style={{color: 'black', fontSize: 13, fontWeight:'bold', alignSelf: 'center'}}>{this.state.update}</Text>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', justifyContent: 'space-between'}}>
                    
                    <View style={{flex: 1, height: 85,  backgroundColor: '#ffff00', 
                    borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                        <Image style={{alignSelf: 'center', width: 50, height: 50}}
                            source={{ uri: 'https://ya-webdesign.com/transparent250_/sad-emoji-png-20.png'}}/>
                        <Text style={{color: 'black', fontSize: 13, alignSelf: 'center'}}>Positif</Text>
                        <Text style={{color: 'black', fontSize: 13, fontWeight:'bold', alignSelf:"center"}}>{this.state.positive}</Text>
                    </View>

                    <View style={{flex: 1, height: 85,  backgroundColor: '#ff7f50', 
                    borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                        <Image style={{alignSelf:"center", width: 50, height: 50}}
                            source={{ uri: 'https://ya-webdesign.com/transparent250_/crying-smiley-emoji-png-4.png'}}/>
                        <Text style={{color: 'black', fontSize: 13, alignSelf: 'center'}}>Perawatan</Text>
                        <Text style={{color: 'black', fontSize: 13, fontWeight:'bold', alignSelf:"center"}}>{this.state.perawatan}</Text>
                    </View>

                    <View style={{flex: 1, height: 85,  backgroundColor: '#00ff7f', 
                    borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                        <Image style={{alignSelf:'center', width: 50, height: 50}}
                            source={{ uri: 'https://ya-webdesign.com/transparent250_/emoji-whatsapp-png-5.png'}}/>
                        <Text style={{color: 'black', fontSize: 13, alignSelf: 'center'}}>Sembuh</Text>
                        <Text style={{color: 'black', fontSize: 13, fontWeight:'bold', alignSelf: 'center'}}>{this.state.sembuh}</Text>
                    </View>

                    <View style={{flex: 1, height: 85,  backgroundColor: '#ff0000', 
                    borderRadius: 20, justifyContent: 'center', marginHorizontal: 10}}>
                        <Image style={{alignSelf:'center', width: 50, height: 50}}
                            source={{ uri: 'https://ya-webdesign.com/transparent250_/crying-emoji-png-3.png'}}/>
                        <Text style={{color: 'black', fontSize: 13, alignSelf: 'center'}}>Meninggal</Text>
                        <Text style={{color: 'black', fontSize: 13, fontWeight:'bold', alignSelf: 'center'}}>{this.state.meninggal}</Text>
                    </View>

                </View>
            </View>
        )

    }
    
}

export default Totalindo;

