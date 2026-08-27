import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';

import { useSafeAreaInsets,SafeAreaProvider } from 'react-native-safe-area-context';

//components
import Bio from './components/Bio';
import SkillIcons from './components/ContactIcons';
import Header from './components/Header';
import SkillTagRow from './components/SkillTags';
import Spacer from './components/Spacer';



 function AboutMeScreen() {
  const insets = useSafeAreaInsets();

  return (
      <View style={[styles.container,{paddingTop:insets.top}]}>
        <Header/>
        <Spacer height={30} spacerborderhieght={1} />

        <SkillTagRow/>
        <Spacer height={20} />

        <Bio/>
        <Spacer height={80} />
        
        
        <SkillIcons/>
        
        <StatusBar style="auto" />
      </View>
  );
}


export default function App(){
  return(
    <SafeAreaProvider>
      <AboutMeScreen/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:20
  },
  
  
});
