const colors = {
  primary: '#4268D6',
  lightestgray: '#E6E9F0',
  lightestpink: '#ECD5E0',
  midgray: '#707070',
  black: '#0D0D0D',
  blackshade: ['transparent', '#0D0D0D'],
  blackshadeinverted: ['rgba(13, 13, 13, 0.3)', 'transparent'],
  bg: '#05103A',
  cardInactive: '#121C44',
  green: '#54D340',
  red: '#d62828',
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 9,
  padding: 25,
  icon: 30,

  // font sizes
  h1: 24,
  h2: 16, //Salon Open title
  h3: 13, //smallest header Tabs, Profile/Salon user cards, Details Info list title, Salon Open subtitle
  //header: 16,
  body: 12,
  caption: 12,
};

const fontFamily = {
  regular: 'Raleway-Regular',
  thin: 'Raleway-Thin',
  semibold: 'Raleway-SemiBold',
  bold: 'Raleway-Bold',
  extrabold: 'Raleway-ExtraBold',
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};
const styles = {
  header: {
    fontSize: sizes.h1,
    fontFamily: 'Raleway-Bold',
    color: 'white',
  },
};

export {colors, sizes, fonts, fontFamily, styles};
