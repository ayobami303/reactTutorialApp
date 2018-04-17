import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import SignatureCapture from 'react-native-signature-capture'
import { Actions } from 'react-native-router-flux'

class Signature extends Component{


	_onDragEvent = () =>{
		console.log("dragged ")
	}

	_onSaveEvent = (result) =>{
		// console.log(result)
		const setSignature = this.props.navigation.state.params.action
		// alert(result.encoded)
		if(setSignature){
			setSignature(result.encoded)
			Actions.pop()
		}
	}

	render() {

		return (
			<View style={{flex:1, flexDirection:"column"}}>
				<Text>Pls Sign Here</Text>
				<SignatureCapture
					ref="sign"
					showTitleLabel={true}
					onSaveEvent = {this._onSaveEvent}
					onDragEvent = {this._onDragEvent}
					showNativeButtons={true}
					saveImageFileInExtStorage={false}
					style = {[{flex:1},styles.signature]}
					viewMode={"portrait"}
				/>
			</View>
		);
	}
}

export default Signature;


const styles = StyleSheet.create({
	signature:{
		flex:1,
		borderWidth: 1,
		borderColor: "#000",
		height:40
	}
})