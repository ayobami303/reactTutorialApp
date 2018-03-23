import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PresentationalComponent = (props) => {
	return(
		<View>
			<Text style = {styles.myState} onPress={props.updateState}>
				{props.myState}
			</Text>
		</View>
		)
}

export default PresentationalComponent;

const styles = StyleSheet.create({
	myState:{
		color:'blue',
		margin:20,
		fontSize:20,
		justifyContent:'space-around'
	}
})