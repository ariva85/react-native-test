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
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '$secondaryColor'
  },
  detailsTitle: {
    color: '$textColor',
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 10
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
    borderWidth: 3,
    borderColor: '$textColor',
    paddingRight: 5
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
    /* borderWidth: 1,
    borderColor: '#000', */
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
    /* padding: 5, */
    marginRight: 5,
    height: 40,
    /*  borderWidth: 1,
    borderColor: '#000', */
    width: '50%',
    alignContent: 'center'
  },
  cartListItemText: {
    flex: 0.6,
    /* borderWidth: 1,
    borderColor: '#000', */
    fontSize: 20
  },

  cartListIcon: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 10
  }
});

export default styles;
