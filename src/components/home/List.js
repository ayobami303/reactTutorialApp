import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class List extends Component{
	state = {
		names:[
		{
			id:1,
			name:'susan'
		},
		{
			id:2,
			name:'toyin'
		},
		{
			id:3,
			name:'robert'
		},
		{
			id:4,
			name:'ben'
		},
		{
			id:5,
			name:'Mary'
		}
		]
	};

	alertItemName = (item) => {
		alert(item.name);
	}
	render() {
		return (
			<View>
			{
				this.state.names.map((item, index) => (
					<TouchableOpacity onPress={() => this.alertItemName(item)} style={styles.container} key={item.id} >
						<Text>{item.name}</Text>
					</TouchableOpacity>
				))
			}
			
			</View>
		);
	}
}
export default List;


const styles = StyleSheet.create({
	container:{
		padding:10,
		backgroundColor: '#d9f9d1',
		marginTop:2
	}
})