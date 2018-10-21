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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '$secondaryColor'
  },
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartIconWrapper: {
    padding: 10,
    marginRight: 10
  },
  detailsWrapper: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '$secondaryColor'
  },
  detailsTitle: {
    color: '$textColor',
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '$lightGrey'
  },
  detailsDescription: {
    color: '$textColor',
    fontSize: 18,
    minHeight: 100,
    marginBottom: 20,
    paddingLeft: 20
  },
  detailsPrice: {
    color: '$textColor',
    fontSize: 30,
    textAlign: 'right',
    borderWidth: 2,
    borderColor: '$lightGrey',
    paddingRight: 5,
    backgroundColor: '#fff'
  },
  addBtn: {
    width: '100%',
    color: '$primaryColor',
    backgroundColor: '$secondaryColor',
    fontSize: 30
  },
  modalContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '$secondaryColor',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000'
  },
  modalTextWrapper: {
    alignItems: 'center',
    marginBottom: 30
  },
  modalText: {
    color: '$textColor',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  },
  cartListIconContainer: {
    flex: 0.4,
    flexDirection: 'row'
  },
  cartListItem: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '$secondaryColor',
    padding: 0,
    alignItems: 'center',
    borderBottomColor: '$lightGrey',
    borderBottomWidth: 1,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderColor: '#000',
    margin: 3
  },
  cartListIconWrapper: {
    marginRight: 5,
    height: 40,
    width: '50%',
    alignContent: 'center'
  },
  cartListItemText: {
    flex: 0.6,
    fontSize: 20
  },

  cartListIcon: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 10
  }
});

export default styles;
