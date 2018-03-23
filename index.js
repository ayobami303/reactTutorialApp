import React, { Component} from 'react';
import { AppRegistry } from 'react-native';
// import reactTutorialApp from './App';
import Routes from './src/components/routes/Routes.js'

class reactTutorialApp extends Component{
	render(){
		return (
			<Routes />
		)
	}
}

export default reactTutorialApp;

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
;