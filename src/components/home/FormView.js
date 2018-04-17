import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import {Button, FormValidationMessage, FormInput, FormLabel, CheckBox} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'


class FormView extends Component{

	constructor(props){
		super(props)
		this.state ={
			checked: false,
			signatureEnc: ''
		}
	}

	_onPress = ()=>{
		this.setState({
			checked: !this.state.checked
		})
	}

	setSignatureEnc = (image) =>{
		// console.log(image)
		const blankEnc = 'iVBORw0KGgoAAAANSUhEUgAAAYsAAAH0CAIAAABD9pbIAAAAA3NCSVQFBgUzC42AAAAGdklEQVR4\nnO3UMQEAIAzAMMC/56GAmx6Jgl7dM7MAks7vAIAnhwK6HArociigy6GALocCuhwK6HIooMuhgC6H\nArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HAro\nciigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuh\ngC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6\nHArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIo\noMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAu\nhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK\n6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDL\noYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocC\nuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhy\nKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GA\nLocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HAroc\nCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociig\ny6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6H\nArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HAro\nciigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuh\ngC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6\nHArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIo\noMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAu\nhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK\n6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDL\noYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocC\nuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhy\nKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GA\nLocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HAroc\nCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociig\ny6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6H\nArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HAro\nciigy6GALocCuhwK6HIooMuhgC6HArocCuhyKKDLoYAuhwK6HArociigy6GALocCuhwK6LrzpQbl\n/+o+YAAAAABJRU5ErkJggg==\n'
		if (image === blankEnc) {
			console.log("blank signature")
		}else{			
			this.setState({
				signatureEnc:image
			})
		}

	}

	_signature = () =>{
		Actions.signature({action:this.setSignatureEnc})
	}

	render() {
		// alert(JSON.stringify(this.props))
		return (
			<View style = {styles.container} >
				<ScrollView>
					<View style= {styles.formContainer}>
						<View style={styles.form}>
							<FormLabel>Username</FormLabel>
							<FormInput />
							<FormLabel>Email</FormLabel>
							<FormInput placeholder="Enter email" />
							<FormLabel>Password</FormLabel>
							<FormInput secureTextEntry = {true} />
							<FormValidationMessage>Password must be at least 8 characters </FormValidationMessage>
							<CheckBox title='Accept terms and condition.' checked={this.state.checked} onPress={this._onPress} />
							<TouchableOpacity onPress={this._signature} style={styles.signatureThumb} >
								{this.state.signatureEnc ?
									<Image source={{uri:`data:image/png;base64,${this.state.signatureEnc}`}} style ={styles.signature} />
									: <Text onPress={this._signature}>Add signature</Text>}
							</TouchableOpacity>
							<Button title='Submit' buttonStyle = {styles.submitButton} />
						</View>
					</View>
				</ScrollView>
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
	},
	submitButton:{
		marginTop: 20,
		borderRadius: 5,
		backgroundColor: '#E97E1E'
		// paddingTop:10	
	},
	signatureThumb:{
		padding: 20
	},
	signature:{
		height:150, 
		width:100,
		borderWidth: 2,
		borderRadius: 5,
		padding:20,
		borderColor: '#D3D3D3'
	} 
})