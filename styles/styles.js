import EStyleSheet from 'react-native-extended-stylesheet';

// define extended styles
const styles = EStyleSheet.create({
  column: {
    width: '80%'
  },
  text: {
    color: '$textColor',
    fontSize: 20
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  listContainer: {
    width: '100%'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    padding: 0,
    alignItems: 'center',
    borderBottomColor: '$lightGrey',
    borderBottomWidth: 1,
    paddingLeft: 5
  },
  listItemText: {
    color: '$textColor',
    fontSize: 24,
    flex: 0.9
  },
  listIcon: {
    flex: 0.1
  },
  loaderWrapper: {
    /* height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center' */
  },
  cartIconWrapper: {
    padding: 10,
    marginRight: 10
  },
  detailsWrapper: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  detailsTitle: {
    color: '$textColor',
    fontSize: 30,
    textAlign: 'left'
  },
  detailsDescription: {
    color: '$textColor',
    fontSize: 20,
    minHeight: 100,
    marginBottom: 10
  },
  detailsPrice: {
    color: '$textColor',
    fontSize: 30,
    textAlign: 'right'
  }
});

export default styles;
