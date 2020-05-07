import React,{ Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';


class Indo extends React.Component{
  constructor(){
    super();
    this.state={
        coviddata: [],
        refreshing: false
    }
}
renderItem=({item})=>

    <View style={{flexDirection: 'row', justifyContent: 'center', borderWidth: 1, height: 40, borderRadius: 10 }}>
      <Text style={{color: 'black', alignSelf: 'center', width:150, marginBottom: 10, height: 20}}> {item.provinsi}</Text>


        <View style={{flex: 1, backgroundColor: '#ffff00', justifyContent: 'center',
        marginVertical: 5, borderWidth: 1, borderRadius: 10, marginHorizontal: 5 }}>
            <Text style={{color: 'black', alignSelf: 'center'}}>{item.kasusPosi}</Text>
        </View>

        <View style={{flex: 1, backgroundColor: '#00ff7f', justifyContent: 'center',
        marginVertical: 5, borderWidth: 1, borderRadius: 10, marginHorizontal: 5 }}>
            <Text style={{color : 'black', alignSelf: 'center'}}>{item.kasusSemb}</Text>
        </View>

        <View style={{flex: 1, backgroundColor: '#ff0000', justifyContent: 'center',
        marginVertical: 5, borderWidth: 1, borderRadius: 10, marginHorizontal: 5 }}>
            <Text style={{color: 'black', alignSelf: 'center'}}>{item.kasusMeni}</Text>
        </View>
    </View>
    
  
onRefresh= () =>{
    this.getDataGlobal();
}

componentDidMount = () =>{
    this.getDataGlobal();
}

getDataGlobal = async () => {
    const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    const json = await response.json()
    const {data} = await json
    this.setState({coviddata: {Data: await data}})
    console.log(json)

}

render(){
    return (
        <View>
         <View style={{ flex: 1, marginTop: -15, marginBottom: -20 }}></View>
         <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>Indonesia</Text>
         <View style={{ flex: 1, marginTop: 70, marginBottom: 35 }}></View>
          <View>
            <FlatList 
                data={this.state.coviddata.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default Indo;
