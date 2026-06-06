import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  StatusBar,
  Image,
} from 'react-native';

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animación de entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 60,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Pequeño efecto de latido después de aparecer
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 2 }
      ).start();
    });

    // Navegación automática al Home después de 2.5 segundos
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#003DA5" />

      {/* Detalles decorativos con los colores de Ecuador */}
      <View style={styles.stripeTop} />
      <View style={styles.stripeBottom} />

      {/* Logo oficial */}
      <Animated.View
        style={[
          styles.logoWrapper,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }, { scale: pulseAnim }],
          },
        ]}
      >
        <Image
          source={require('./assets/fef_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Texto Ecuador - La Tri */}
      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.mainTitle}>ECUADOR</Text>
        <Text style={styles.subTitle}>- La Tri -</Text>
        <Text style={styles.tagline}>¡Unidos por los colores!</Text>

        {/* Indicador de carga */}
        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003DA5', // Azul principal
    alignItems: 'center',
    justifyContent: 'center',
  },
  stripeTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '28%',
    backgroundColor: '#FFCC00', // Amarillo
    opacity: 0.12,
  },
  stripeBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '18%',
    backgroundColor: '#CC0000', // Rojo
    opacity: 0.08,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  logo: {
    width: 170,
    height: 170,
  },
  textContainer: {
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: '900',
    color: '#FFCC00',
    letterSpacing: 3,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginTop: 4,
  },
  tagline: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 12,
    letterSpacing: 1,
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  dotActive: {
    backgroundColor: '#FFCC00',
    width: 20,
    borderRadius: 4,
  },
});