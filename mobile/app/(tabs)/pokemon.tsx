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
        source={require('@/assets/images/pokemonbw.jpg')}
        style={styles.headerImage}
      />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Segundo Rumores, Pokémon Black & Withe Podem Ter um Remake</ThemedText>
      </ThemedView>
      <ThemedText>Pokémon Black & White são antigos jogos de Pokémon, que eram dividos em duas versôes, Black Version e White Version, cada um contando com Pokémons únicos, sendo representados em sua capa os pokémons lendários Reshiram e Zekrom.</ThemedText>
       
        <ThemedText>
           <ThemedText >Recentemente surgiu rumores sobre que esses tais jogos tão aclamados pelo público, possam ganhar remakes em um futuro próximo. Esses rumores vem devido ao fato da Nintendo, a empresa dona da marca Pokémon, adquiriu novas patentes que fizeram os insiders pensarem que talvez ela esteja pensando em um remake de jogos de Pokémon.</ThemedText>{' '}
          
        </ThemedText>
      

      <Collapsible title="jumpscare">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
        <Image
        source={require('@/assets/images/gengar.webp')}
        style={styles.headerImage}
      />
       
      </Collapsible>
      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: 370,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});