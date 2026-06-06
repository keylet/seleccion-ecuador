// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, View, Text, ActivityIndicator } from 'react-native';

// Importación de pantallas con manejo de errores
import SplashScreen from './app/SplashScreen';
import HomeScreen from './app/HomeScreen';

// Ignorar advertencias específicas (opcional, para limpiar la consola)
LogBox.ignoreLogs([
  'Remote debugger',
  'Warning: ...',
  'VirtualizedLists should never be nested',
]);

const Stack = createNativeStackNavigator();

/**
 * Componente de fallback para errores de navegación
 */
function ErrorFallback() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#003DA5' }}>
      <Text style={{ color: '#FFCC00', fontSize: 18, marginBottom: 10 }}>⚠️ Error de conexión</Text>
      <Text style={{ color: '#FFFFFF', textAlign: 'center', paddingHorizontal: 20 }}>
        No se pudieron cargar las pantallas. Verifica la estructura de archivos.
      </Text>
    </View>
  );
}

/**
 * Componente de carga mientras se inicializa la navegación
 */
function LoadingFallback() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#003DA5' }}>
      <ActivityIndicator size="large" color="#FFCC00" />
      <Text style={{ color: '#FFFFFF', marginTop: 10 }}>Iniciando aplicación...</Text>
    </View>
  );
}

export default function App() {
  // Opcional: Efecto para manejar errores globales (solo para desarrollo)
  useEffect(() => {
    if (__DEV__) {
      const errorHandler = (error) => {
        console.log('Error global capturado:', error);
      };
      global.ErrorUtils.setGlobalHandler(errorHandler);
    }
  }, []);

  try {
    return (
      <NavigationContainer
        fallback={<LoadingFallback />}
        onStateChange={(state) => {
          // Opcional: Loggear cambios de estado de navegación (solo desarrollo)
          if (__DEV__ && state) {
            console.log('Navegación actual:', state.routes[state.index]?.name);
          }
        }}
      >
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right', // Animación suave entre pantallas
            orientation: 'portrait', // Forzar orientación vertical (opcional)
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              animation: 'fade', // Animación de fade para el Splash
            }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              animation: 'slide_from_right',
              gestureEnabled: true, // Permitir deslizar hacia atrás
              gestureDirection: 'horizontal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } catch (error) {
    console.error('Error en la configuración de navegación:', error);
    return <ErrorFallback />;
  }
}