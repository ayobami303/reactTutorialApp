import React, {Component} from 'react'
import {View, Linking, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import {RNCamera} from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { Actions } from 'react-native-router-flux'


class QRCodeScannerView extends Component{

	constructor(props){
		super(props)
		this.state ={
			path: ''
		}
	}
	_onSuccess = (e) =>{
		// this.scanner.reactivate()
		alert(e.data)
		Actions.form()
		// Linking
		// .openURL(e.data)
		// .catch(error => {
		// 	console.log('An error occured' ,error)
		// })
	}

	takePicture = async () => {
		if(this.camera){
			const options = {quality: 0.5, base64:true};
			const data = await this.camera.takePictureAsync(options)
			this.setState({
				path: data.uri
			})
			console.log(data.uri)
		}
	}

	
	render() {
		return (
			<View style={styles.container}>
				<QRCodeScanner 
					style={{flex:1}} 
					onRead = {this._onSuccess}
					ref = {(node) => {this.scanner = node}}
					fadeIn = {true}
					showMarker = {true}
					topContent={
						<Text style ={styles.centerText}> 
							Go to <Text style={styles.textBold}>wikipedia.org/wike/QRCode</Text> on your computer and scan the QR code
						</Text>
					}

					bottomContent = {
						<TouchableOpacity style = {styles.buttonTouchable}>
							<Text style={styles.buttonText}>OK. Got it!</Text>
						</TouchableOpacity>
					}
				/>							
			</View>
		);
	}
} 


export default QRCodeScannerView

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
		backgroundColor: 'white'
	},
	centerText:{
		flex:1,
		fontSize:18,
		padding: 12,
		color: '#777'
	},
	textBold:{
		fontWeight:'400',
		color: '#000',		
	},
	buttonTouchable:{
		padding:16,
	},
	buttonText: {
	    fontSize: 21,
		color:'rgb(0,122,255)',	    
	  },
})	