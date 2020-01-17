import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  searchForm: {
    position: 'absolute',
    top: 10,
    marginLeft: 35,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 14,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 5
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#3399ff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  }
});

export default styles;
