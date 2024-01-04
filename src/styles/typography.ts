/*
  Fonts types and sizes
 */

import Colors from '@styles/colors';

const Fonts = {
  header: {
    logo: {
      color: '#000000',
      fontFamily: 'Mortend-Bold',
      fontSize: 18,
      lineHeight: 24,
      // letterSpacing: 0,
    },
    title: {
      color: '#161616',
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 20,
      lineHeight: 24,
    },
  },
  tabBar: {
    label: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0,
    },
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.36,
    lineHeight: 24,
    color: Colors.fontGray02,
    paddingTop: 20,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
    color: Colors.fontGray03,
    paddingTop: 8,
  },
};

export default Fonts;
