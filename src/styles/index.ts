/**
 * @flow
 */
import {Dimensions} from 'react-native';

import colors from './colors';
import fonts from './fonts';

const {width} = Dimensions.get('window');

const guidelineBaseWidth: number = 330;

const scale = (size: number): number => (width / guidelineBaseWidth) * size;

export {colors, fonts, scale, width};
