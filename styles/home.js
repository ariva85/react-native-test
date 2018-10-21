import EStyleSheet from 'react-native-extended-stylesheet';

const homeStyles = EStyleSheet.create({
  listContainer: {
    width: '100%'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '$secondaryColor',
    padding: 0,
    alignItems: 'center',
    borderBottomColor: '$lightGrey',
    borderBottomWidth: 1,
    paddingLeft: 5
  },
  listItemText: {
    color: '$textColor',
    fontSize: 24,
    flex: 0.4,
    paddingLeft: 20
  },
  listItemPrice: {
    color: '$textColor',
    fontSize: 24,
    flex: 0.3,
    textAlign: 'right'
  },
  listIcon: {
    flex: 0.3,
    textAlign: 'right',
    paddingRight: 10
  },
  loaderWrapper: {
    /* height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center' */
  }
});

export default homeStyles;
