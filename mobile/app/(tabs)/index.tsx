import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/sillenthillf.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">bem vindo, aqui somos uma comunidade dos antigos e novos fãs de Sillent Hill com o objetivo de noticiar neste aplicativo tudo sobre o novo jogo da franquia que está pra ser lançado!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Silent Hill F é o próximo jogo da franquia e isto está levando os fãs a loucura</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> 
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O próximo jogo irá se passar em 1960 e no Japão?</ThemedText>
        <ThemedText>
  Sim, pela primeira vez iremos sair da cidade de Silent Hill, além de irmos para o passado, já que o primeiro jogo se passa 23 anos depois. Neste novo jogo controlaremos Hinako Shimizu, uma estudante do ensino médio, que em um dia comum, sua cidade, Ebisugaoka, é consumida por uma névoa, assim começando um pesadelo que nem ela e nem ninguém poderia imaginar!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quando irá lançar?</ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">Não temos uma data ainda, mas não precisa ficar desanimado, pois pelo o que foi falado, ele possívelmente irá lançar em 2026, para Xbox Series X/S(talvez um ano depois de lançar, devido a playstation), Playstation 5 e PC</ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 370,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
