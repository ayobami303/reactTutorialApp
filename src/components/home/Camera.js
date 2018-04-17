import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import {RNCamera} from 'react-native-camera'


class QRCodeScannerView extends Component{

	constructor(props){
		super(props)
		this.state ={
			path: ''
		}
	}
	_onRead = () =>{

	}

	takePicture = async () => {
		if(this.camera){
			const options = {quality: 0.5, base64:true};
			const data = await this.camera.takePictureAsync(options)
			this.setState({
				path: data.uri
			})
			console.log(data.base64)
		}
	}

	renderImage() {
    return (
      <View style={{flex:1}}>
        <Image
          source={{ uri:this.state.path }}
          style={styles.iPreview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancel
        </Text>
      </View>
    );
  }

	
	render() {
		return (
			<View style={styles.container}>
			{this.state.path ? this.renderImage() : 
				<View style={{flex:1}}>
				<RNCamera
					style = {styles.preview}
					ref={ref=>{this.camera = ref}}
					type = {RNCamera.Constants.Type.back}
					flashMode = {RNCamera.Constants.FlashMode.on}
					permissionDialogTitle = {'permission to use camera'}
					permissionDialogMessage = {'we need your permission to use you phone camera'}
				/>
				<View style={{flex:0, flexDirection: 'row', justifyContent:'center'}}>
					<TouchableOpacity
						onPress = {this.takePicture}
						style = {styles.capture}
					>
					<Text style = {{fontSize:14}} >SNAP</Text>	
					</TouchableOpacity>
				</View>
				</View>
			}
			</View>
		);
	}
} 


export default QRCodeScannerView

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
		backgroundColor: 'black'
	},
	preview:{
		flex:1,
		alignItems:'center',
		justifyContent: 'flex-end'
	},
	capture:{
		flex:0,
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20
	},
	cancel:{
		flex:0,
		padding:15,
		backgroundColor:'#fff'
	},
	iPreview: {
	    flex: 1,
		backgroundColor:'#fff',
	    justifyContent: 'flex-end',
	    alignItems: 'center',
	    height: Dimensions.get('window').height,
	    width: Dimensions.get('window').width
	  },
})	