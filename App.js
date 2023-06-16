import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [isPasswordRecoveryScreen, setIsPasswordRecoveryScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleScreen = () => {
    setIsLoginScreen(!isLoginScreen);
    setIsPasswordRecoveryScreen(false);
  };

  const togglePasswordRecovery = () => {
    setIsLoginScreen(false);
    setIsPasswordRecoveryScreen(!isPasswordRecoveryScreen);
  };

  const handleLogin = () => {
    // login
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // cadastro
    setIsLoggedIn(true);
  };

  const handlePasswordRecovery = () => {
    // resetar senha
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.title}>Dashboard</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : isPasswordRecoveryScreen ? (
        <View>
          <Text style={styles.title}>Recuperação de Senha</Text>
          <TextInput placeholder="E-mail" style={styles.input} />
          <Button title="Recuperar Senha" onPress={handlePasswordRecovery} />
          <Text style={styles.toggleText}>
            Lembrado(a) da senha?{' '}
            <Text style={styles.toggleLink} onPress={toggleScreen}>
              Faça login
            </Text>
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Tela de Login</Text>
          <TextInput placeholder="E-mail" style={styles.input} />
          <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
          <Button title="Login" onPress={handleLogin} />
          <Text style={styles.toggleText}>
            Não possui uma conta?{' '}
            <Text style={styles.toggleLink} onPress={toggleScreen}>
              Cadastre-se
            </Text>
          </Text>
          <Text style={styles.toggleText}>
            Esqueceu sua senha?{' '}
            <Text style={styles.toggleLink} onPress={togglePasswordRecovery}>
              Recupere aqui
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toggleText: {
    marginTop: 20,
    textAlign: 'center',
  },
  toggleLink: {
    color: 'blue',
  },
});

export default App;
