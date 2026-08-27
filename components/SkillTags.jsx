import { StyleSheet, Text, View } from 'react-native'

const SkillTagRow = () => {
return(
    <View style={styles.tagRow}>
        <SkillTag text="Java"/>
        <SkillTag text="JS" />
        <SkillTag text="React Native"/>
        <SkillTag text="Full Stack" />
        <SkillTag text="DBA" />
        <SkillTag text="AND MOREEEEE" />
    </View>
)
}

 function SkillTag({ text }){
    return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>• {text}</Text>
    </View>
  )
}

export default SkillTagRow

const styles = StyleSheet.create({
  tag: {
    backgroundColor: 'rgba(224, 224, 224, 0.3) ',
    borderRadius: 40,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  tagText: {
    color: 'skyblue',
    fontSize: 12,
    fontWeight: '500',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})