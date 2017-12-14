import React from 'react';
import { StyleSheet } from 'react-native';
import { Right, Button, Text, View, Touchable, Image, Left, Header, Title, Body, Container, Content } from "./components";
// import styles from './styles'
export default class App extends React.Component {
	render() {
		return (
			<Container>
				<Header>
					<Text>首页</Text>
				</Header>
				<Content>
					<View style={styles.container}>
						<Text>Changes you make will automatically reload.</Text>
						<Text>Shake your phone to open the developer menu.</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
