import React from 'react';
import { Router, Scene} from 'react-native-router-flux';
import Home from '../home/Home.js';
import About from '../home/About.js';
import ModalExample from '../home/ModalExample.js';
import ActivityIndicatorExample from '../home/ActivityIndicatorExample.js'
import Animation from '../home/Animation.js'
import HttpExample from '../home/HttpExample.js';
import ImagesExample from '../home/ImagesExample.js';
import Input from '../home/Input.js';
import List from '../home/List.js';
import ScrollViewExample from '../home/ScrollViewExample.js';

const Routes = () => (
	<Router>
		<Scene key = "root">
			<Scene key = "home" component = {Home} title = "Home" initial = {true} />
			<Scene key = "about" component = {About} title = "About" />
			<Scene key = "activityIndicator" component = {ActivityIndicatorExample} title = "Activity Indicator"  />
			<Scene key = "animation" component = {Animation} title = "Animation Example"  />
			<Scene key = "httpExample" component = {HttpExample} title = "Http Example"  />
			<Scene key = "imagesExample" component = {ImagesExample} title = "Images Example"  />
			<Scene key = "input" component = {Input} title = "Input Example"  />
			<Scene key = "list" component = {List} title = "List Example"  />
			<Scene key = "modal" component = {ModalExample} title = "Modal Example"  />
			<Scene key = "scrollView" component = {ScrollViewExample} title = "Scroll View Example"  />
		</Scene>
	</Router>
)

export default Routes