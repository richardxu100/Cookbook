import { red400, fullWhite } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: red400,
    // textColor: fullWhite,
    // secondaryTextColor: fade(fullWhite, 0.7),
    // alternateTextColor: '#303030',
    // canvasColor: '#303030',
	}
})

export default muiTheme;
