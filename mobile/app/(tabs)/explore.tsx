import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/sillenthillf.jpg')}
        style={styles.headerImage}
      />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Silent Hill F, próximo jogo da franquia de jogos de survival horror</ThemedText>
      </ThemedView>
      <ThemedText>Silent Hill F foi anunciado como o próximo jogo da aclamada franquia de survival horror, a Konami anunciou com um trailer mostrando novas ideias que estarão no jogo.</ThemedText>
     
      
      <Collapsible title="jumpscare">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});