import React, {Component} from 'react';
import {Text, View} from 'react-native';


class HttpExample extends Component{
	state = {
		data:'asdedas'
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method:'GET'
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			this.setState({data: responseJson});
		})
		.catch((error) => {
			console.error(error);
		})
	}

	render(){
		return (
			<View>
				{this.state.data.body}
			</View>
		)
	}
}

export default HttpExample;