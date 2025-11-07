import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Image } from 'react-native';
import globalStyles from '../style'; 

// Mock de usuários válidos
const MOCK_USERS = [
  { email: 'teste@paciente.com', senha: '123' },
  { email: 'admin@skilltrain.com', senha: '456' },
];

// Função de login simulada
const loginUser = async (email, senha) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!email || !senha) {
    return { success: false, message: 'Por favor, preencha todos os campos.' };
  }

  const user = MOCK_USERS.find(u => u.email === email && u.senha === senha);

  if (user) {
    return { success: true, message: 'Login realizado com sucesso!', user };
  } else {
    return { success: false, message: 'Credenciais inválidas. Tente novamente.' };
  }
};

// Mock simples de navegação
const useNavigationMock = () => {
  const [screen, setScreen] = useState('Login');
  const navigate = (destination) => {
    console.log(`[NAVIGATION MOCK]: navegando para ${destination}`);
    setScreen(destination);
  };
  return { navigate, screen };
};

export default function App() {
  const { navigate } = useNavigationMock();
  return (
    <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Login navigation={{ navigate }} />
    </View>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const showToast = (message) => setLoginError(message);

  const handleLogin = async () => {
    setLoginError('');

    if (!email || !senha) {
      showToast('Por favor, preencha todos os campos!');
      return;
    }

    setIsLoading(true);

    try {
      const result = await loginUser(email, senha);
      showToast(result.message);
      if (result.success) {
        navigation.navigate('Pacientes');
      }
    } catch {
      showToast('Ocorreu um erro inesperado ao tentar conectar.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.card}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')} // substitui pela tua logo se quiser
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>SkillTrain</Text>
      </View>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Email: teste@paciente.com"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        editable={!isLoading}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha: 123"
        placeholderTextColor="#888"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        editable={!isLoading}
      />

      {/* Mensagem de feedback */}
      {loginError ? (
        <Text
          style={[
            styles.feedback,
            loginError.includes('sucesso') ? styles.success : styles.error,
          ]}
        >
          {loginError}
        </Text>
      ) : null}

      {/* Botão Entrar */}
      <TouchableOpacity
        onPress={handleLogin}
        style={[globalStyles.pacienteButton, isLoading && { opacity: 0.7 }]}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={globalStyles.menuButtonText}>ENTRAR</Text>
        )}
      </TouchableOpacity>

      {/* Links */}
      <View style={styles.linksContainer}>
        <TouchableOpacity disabled={isLoading}>
          <Text style={styles.linkText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={isLoading}>
          <Text style={[styles.linkText, { color: '#888' }]}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 64,
    height: 64,
    tintColor: '#0ea5a3',
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 14,
  },
  feedback: {
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  success: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    borderWidth: 1,
    borderColor: '#34d399',
  },
  error: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    borderWidth: 1,
    borderColor: '#f87171',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  linkText: {
    color: '#0ea5a3',
    fontWeight: '600',
  },
});
