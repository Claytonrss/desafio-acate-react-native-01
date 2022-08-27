import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: width - 64,
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  image: {
    width: '100%',
    borderRadius: 4,
    elevation: 2,
    flex: 1,
  },
  descriptionContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 6,
    paddingBottom: 32,
  },
  text: {
    textAlign: 'left',
  },
  name: {
    color: '#FDFCFE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  gender: {
    fontSize: 16,
    color: '#AFAFAF',
  },
  favoriteIcon: {
    padding: 5,
  },
})
