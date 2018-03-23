import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

class Input extends Component{
	state={
		email:'',
		password:''
	}

	handleEmail = (text) => {
		this.setState({email:text})
	}

	handlePassword = (text) => {
		this.setState({password:text})
	}

	login = (email, pass) =>{
		alert('Email:'+email+' Password:'+pass);
	}

	render(){
		return(
			<View style={styles.container}>
				<TextInput style = {styles.input}
					underlineColorAndroid = 'transparent'
					placeholder = 'Email'
					placeholderTextColor = '#9a73ef'
					autoCapitalize = 'none'
					onChangeText = {this.handleEmail} />
				<TextInput style={styles.input}
					underlineColorAndroid = 'transparent'
					placeholder = 'Password'
					placeholderTextColor = '#9a73ef'
					autoCapitalize = 'none'
					onChangeText = {this.handlePassword} />
				<TouchableOpacity 
					style={styles.submitButton}
					onPress={()=> {this.login(this.state.email, this.state.password)}}
					>
					<Text style={styles.submitButtonText}> Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Input;

const styles = StyleSheet.create({
	container:{
		padding:8
	},
	input:{
		margin:10,
		height:40,
		padding:8,
		borderColor: '#7a42f4',
		borderWidth: 1
	},
	submitButton:{
		backgroundColor: '#7a42f4',
		padding: 10,
		margin: 10,
		height: 40
	},
	submitButtonText:{
		color: 'white',
		textAlign:'center'
	}
});