import { StyleSheet, Text, View } from 'react-native'

const Bio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        hi im johnmark a 4th year com-sci student I know some stuff but my brain js dont work much lol.
      </Text>
    </View>
  )
}

export default Bio

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
})