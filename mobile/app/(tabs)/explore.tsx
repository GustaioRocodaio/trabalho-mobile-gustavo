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
        <ThemedText type="title">Aqui você encontra respostas para duvidas sobre o próximo Silent Hill</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="Quais os requistios para rodar no meu PC?">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">
          Sistema Operacional: Windows 11 x64.
            
          Processador: Intel Core i5-8400 / AMD Ryzen 5 2600. 
             
          Memória RAM: 16 GB</ThemedText> {' '}
          
         
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="jumpscare">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
        <Image
        source={require('@/assets/images/gengar.webp')}
        style={styles.headerImage}
      />
        <ExternalLink href="">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
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
