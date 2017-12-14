import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';
import { StyleProvider, Root, View } from './components'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<StyleProvider style={getTheme(commonColor)} >
				<Root>
					<Screen />
				</Root>
			</StyleProvider>

		);
	}
}

export default App;