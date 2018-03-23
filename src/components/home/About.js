import React from 'react'
import { TouchableOpacity, Text, View} from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
	const goToHome = () => {
		Actions.home()
	}

	const goToModal = () => {
		Actions.modal()
	}

	return (
		<View>
			<View>
				<TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome} >
					<Text> This is ABOUT </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style = {{ margin: 128 }} onPress = {goToModal} >
					<Text> This is MODAL </Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default About;