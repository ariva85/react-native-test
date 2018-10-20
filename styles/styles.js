import EStyleSheet from 'react-native-extended-stylesheet';

// define extended styles
const styles = EStyleSheet.create({
  column: {
    width: '80%' // 80% of screen width
  },
  text: {
    color: '$textColor', // global variable $textColor
    fontSize: '1.5rem' // relative REM unit
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
