// app/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MotiView } from 'moti';
import { Activity } from 'lucide-react-native';

// SplashScreen animada com Moti
function SplashScreen() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Carregando o Rendy...</Text>
      <ActivityIndicator size="large" color="#0ff" />
    </View>
  );
}

// Tela de boas-vindas animada
function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 800 }}
      >
        <Text style={styles.title}>Bem-vindo ao Rendy!</Text>
        <Text style={styles.subtitle}>Seu app inteligente, seguro e inovador</Text>
      </MotiView>
    </View>
  );
}

// Aba de exemplo com ícone
function IconExample() {
  return (
    <View style={{ padding: 20 }}>
      <Activity color="black" size={32} />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <IconExample />
    </View>
  );
}

// Navegação por abas
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Boas-vindas" component={WelcomeScreen} />
    </Tab.Navigator>
  );
}

// App principal com tela de carregamento inicial
export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsReady(true);
    };
    init();
  }, []);

  if (!isReady) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#0ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#0ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
  },
});
