import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Button, FormInput, FormLabel} from 'react-native-elements'


class FormView extends Component{


	render() {
		return (
			<View style = {styles.container} >
				<View style= {styles.formContainer}>
					<View style={styles.form}>
						<FormLabel>Name</FormLabel>
						<FormInput />
						<FormLabel>Password</FormLabel>
						<FormInput />
						<Button title='Submit'/>
					</View>
				</View>
			</View>
		);
	}
}

export default FormView;

const styles = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#384162',
		justifyContent: 'center',
		// alignItems: 'center'
	},
	formContainer:{
		backgroundColor:'#fff',
		borderRadius:5,
		margin: 20
	},
	form:{
		padding:10
	}
})