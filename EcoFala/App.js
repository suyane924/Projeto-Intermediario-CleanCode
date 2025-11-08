import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import Pacientes from './src/screens/Pacientes'; 
import Cadastro from './src/screens/Cadastro';
import ListarCenario from './src/screens/ListarCenario'; 
import GerarCenario from './src/screens/GerarCenario';
import Feedback from './src/screens/Feedback';
import Relatorio from './src/screens/Relatorio';
import ListarRelatorios from './src/screens/ListarRelatorios';
import Cenario from './src/screens/Cenario';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Menu Principal' }} 
        />
        <Stack.Screen
          name="Pacientes"
          component={Pacientes}
          options={{ title: 'Selecionar Pacientes', headerShown: false }} 
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro' }}
        />
         <Stack.Screen
          name="ListarCenario"
          component={ListarCenario}
          options={{ title: 'Listar Cenários' }}
        />
        <Stack.Screen
          name="GerarCenario"
          component={GerarCenario}
          options={{ title: 'Gerar Cenário' }}
        />
         <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ title: 'Feedback' }}
        />
        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{ title: 'Relatorio' }}
        />
        <Stack.Screen
          name="ListarRelatorios"
          component={ListarRelatorios}
          options={{ title: 'ListarRelatorios' }}
        />
        <Stack.Screen
          name="Cenario"
          component={Cenario}
          options={{ title: 'Cenario' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
