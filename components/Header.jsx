import { StyleSheet, Text, Image, View } from 'react-native'
import Spacer from './Spacer'
const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../assets/img/why the long face.png')} style={styles.profile} />
      <Text style={styles.label}>About Me</Text>
        <Spacer height={20}/>

      <Text style={styles.name}>John Mark Sato</Text>
      <Text style={styles.title}>
        {'just a jobless damn student :<'}
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  profile: {
    borderRadius: 100,
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: 'skyblue',
    marginBottom: 12,
  },
  label: {
    color: 'skyblue',
    fontWeight: '600',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 4,
  },
  name: {
    color: '#skyblue',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  title: {
    color: 'darkgrey',
    fontSize: 13,
    textAlign: 'center',
  },
})