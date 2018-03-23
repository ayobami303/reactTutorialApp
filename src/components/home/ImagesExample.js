import React, {Component} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

class ImagesExample extends Component{
	render(){
		return(
			<View style={{padding:8}}>
				<Image source = {require('../../img/programmer.png')} style={{width: 200, height:300}}/>
			</View>
		)
	}
}

export default ImagesExample;