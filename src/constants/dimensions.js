import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default dimensions = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('window').height - getStatusBarHeight(),
};
