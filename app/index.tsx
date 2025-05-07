import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MotiView } from 'moti';

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // Simula carregamento de dados iniciais (IA, tokens, configs, etc)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsReady(true);
    };
    init();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando o Rendy...</Text>
        <ActivityIndicator size="large" color="#0ff" />
      </View>
    );
  }

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
