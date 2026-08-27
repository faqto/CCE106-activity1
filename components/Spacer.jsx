import { View } from 'react-native'

const Spacer = ({
  width = '100%',
  height = 40,
  spacerborderhieght = 1,
  borderColor = 'lightgrey',
}) => {
  return (
    <View style={{ width, height, justifyContent: 'center', paddingHorizontal:20 }}>
      {spacerborderhieght > 0 && (
        <View
          style={{
            width: '100%',
            height: spacerborderhieght,
            backgroundColor: borderColor,
          }}
        />
      )}
    </View>
  )
}

export default Spacer
