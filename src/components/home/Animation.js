import React, { Component } from 'react';
import { View, Animated, LayoutAnimation, TouchableOpacity, Text, StyleSheet} from 'react-native';

class Animations extends Component {

	componentWillMount = () => {
		this.animatedWidth = new Animated.Value(50)
		this.animatedHeight = new Animated.Value(100)
	}

	animatedBox = () => {
		Animated.timing(this.animatedWidth, {
			toValue: 200,
			duration: 1000
		}).start()
		Animated.timing(this.animatedHeight, {
			toValue: 500,
			duration: 500
		}).start()
	}

	render(){
		const animatedStyle = {width: this.animatedWidth, height:this.animatedHeight}
		return (
			<TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
				<Animated.View style ={[styles.box, animatedStyle]} />
			</TouchableOpacity>
		)
	}
	/*state ={
		myStyle: {
			height: 100,
			backgroundColor: 'red'
		}
	}*/
/*
	expandElement = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		this.setState({
			myStyle:{
				height: 400,
				backgroundColor: 'red',
			}
		})
	}

	collapseElement = () =>{
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

		this.setState({
			myStyle:{
				height: 100,
				backgroundColor: 'red'
			}
		})
	}

	render(){
		return(
			<View>
				<View>
					<View style = {this.state.myStyle} ></View>
				</View>

				<TouchableOpacity>
					<Text style = {styles.button} onPress ={this.expandElement}>
						Expand
					</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text style = {styles.button} onPress ={this.collapseElement}>
						Collapse
					</Text>
				</TouchableOpacity>
			</View>
		)
	}*/
}

export default Animations;

const styles = StyleSheet.create({
	button:{
		borderWidth: 1,
      	borderColor: 'red',
      	color: 'red',
      	textAlign: 'center',
      	marginTop: 50,
      	padding: 10
	},
	container:{
		justifyContent: 'center',
		alignItems: 'center'
	},
	box: {
		backgroundColor: 'blue',
		width: 50,
		height:100,
	}
})