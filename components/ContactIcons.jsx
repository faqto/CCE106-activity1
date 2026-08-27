import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'

const SkillIcons = () => {
  return(

<View style={styles.iconRow}>
  <SkillIcon icon={require('../assets/icons/facebook.png')} text="Facebook" url="https://www.facebook.com/share/1BREt2ZtRL/" />
  <SkillIcon icon={require('../assets/icons/mail.png')} text="Email" url="mailto:markjohnilc@gmail.com" />
  <SkillIcon icon={require('../assets/icons/linked-in.png')} text="LinkedIn" url="https://www.linkedin.com/in/john-mark-sato-66963b381/" />
  <SkillIcon icon={require('../assets/icons/github.png')} text="GitHub" url="https://github.com/faqto" />
</View>
  );
}

function SkillIcon({ icon, text, url }){
  const handlePress = () => {
    Linking.openURL(url)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}


export default SkillIcons

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 8,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  text: {
    fontSize: 11,
    color: 'lightslategrey',
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
}
})