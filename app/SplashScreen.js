import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Animación de entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 60,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FFD100" />

      {/* Fondo con franjas */}
      <View style={styles.topStripe} />
      <View style={styles.middleStripe} />
      <View style={styles.bottomStripe} />

      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {/* Escudo SVG representado con componentes */}
        <View style={styles.shield}>
          <View style={styles.shieldTop}>
            <View style={styles.shieldTopLeft} />
            <View style={styles.shieldTopRight} />
          </View>
          <View style={styles.shieldBottom} />
          <Text style={styles.shieldText}>🦅</Text>
          <Text style={styles.shieldFEF}>FEF</Text>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.title}>SELECCIÓN</Text>
        <Text style={styles.subtitle}>ECUATORIANA</Text>
        <Text style={styles.country}>🇪🇨 ECUADOR</Text>
        <Text style={styles.tagline}>La Tri — Unidos por los colores</Text>
      </Animated.View>

      <Animated.View style={{ opacity: fadeAnim, position: 'absolute', bottom: 60 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>CONOCE AL EQUIPO →</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003087',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topStripe: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '33%',
    backgroundColor: '#FFD100',
    opacity: 0.15,
  },
  middleStripe: {
    position: 'absolute',
    top: '33%',
    left: 0,
    right: 0,
    height: '33%',
    backgroundColor: '#003087',
    opacity: 0.05,
  },
  bottomStripe: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '33%',
    backgroundColor: '#CC0000',
    opacity: 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  shield: {
    width: 140,
    height: 160,
    backgroundColor: '#FFD100',
    borderRadius: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#FFD100',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    overflow: 'hidden',
  },
  shieldTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    flexDirection: 'row',
  },
  shieldTopLeft: {
    flex: 1,
    backgroundColor: '#003087',
  },
  shieldTopRight: {
    flex: 1,
    backgroundColor: '#FFD100',
  },
  shieldBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#CC0000',
    opacity: 0.3,
  },
  shieldText: {
    fontSize: 60,
    zIndex: 10,
  },
  shieldFEF: {
    fontSize: 18,
    fontWeight: '900',
    color: '#003087',
    letterSpacing: 4,
    zIndex: 10,
    marginTop: -5,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFD100',
    letterSpacing: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 6,
    marginTop: 4,
  },
  country: {
    fontSize: 28,
    marginTop: 16,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 10,
    fontStyle: 'italic',
    letterSpacing: 1,
  },
  button: {
    backgroundColor: '#FFD100',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#FFD100',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#003087',
    fontWeight: '900',
    fontSize: 15,
    letterSpacing: 2,
  },
});
