import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PresentationalComponent from './PresentationalComponent.js';
import List from './List.js';
import Input from './Input.js';
import ScrollViewExample from './ScrollViewExample.js';
import ImagesExample from './ImagesExample.js';
import HttpExample from './HttpExample.js';
import Animation from './Animation.js'
import { Actions } from 'react-native-router-flux'

const Home = () => {
	const goToAbout = () => {
		Actions.about()
	}

	const goToActivityIndicator = () => {
		Actions.activityIndicator()
	}

	const goToAnimation = () => {
		Actions.animation()
	}

	const goToHttpExample = () => {
		Actions.httpExample()
	}

	const goToImagesExample = () => {
		Actions.imagesExample()
	}

	const goToInputExample = () => {
		Actions.input()
	}

	const goToListExample = () => {
		Actions.list()
	}

	const goToHome = () => {
		Actions.home()
	}

	const goToModalExample = () => {
		Actions.modal()
	}

	const goToScrollExample = () => {
		Actions.scrollView()
	}

	return (
		<View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToAbout} >
					<Text> Go To About </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToActivityIndicator} >
					<Text> Go To Activity Indicator </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToAnimation} >
					<Text> Go To Animation </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToHttpExample} >
					<Text> Go To HTTP  </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToImagesExample} >
					<Text> Go To Images  </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToInputExample} >
					<Text> Go To Input  </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToListExample} >
					<Text> Go To List  </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToModalExample} >
					<Text> Go To Modal  </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 12 }} onPress = {goToScrollExample} >
					<Text> Go To Scroll View  </Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}


/*class Home extends Component {
	constructor(props){
		super(props);
		this.state ={
			myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
		this.updateState = this.updateState.bind(this);
	}
	
	updateState = () => this.setState({myState:'this state has been updated'});
	render(){
		return (
			<View>
				<Animation />
			</View>
		);
	}
}
*/
// <PresentationalComponent updateState = {this.updateState} myState={this.state.myState} />
export default Home;
