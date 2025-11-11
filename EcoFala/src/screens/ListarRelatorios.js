import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles';
import { showToast } from '../components/ToastMessage';

export default function ListarRelatorios({ navigation }) {
  const relatorios = [
    { data: '10/10/2024', paciente: 'João Silva' },
    { data: '12/10/2024', paciente: 'Maria Oliveira' },
    { data: '14/10/2024', paciente: 'Carlos Souza' },
  ];

  const handleViewRelatorio = (relatorio) => {
    showToast(`Abrindo relatório de ${relatorio.paciente} (${relatorio.data})`);
    navigation.navigate('Relatorio', { relatorio });
  };

  return (
    <View style={globalStyles.menuContainer}>
      <Text style={globalStyles.title}>Relatórios dos Pacientes</Text>

      {relatorios.map((relatorio, index) => (
        <TouchableOpacity
          key={index}
          style={globalStyles.menuButton}
          onPress={() => handleViewRelatorio(relatorio)}
        >
          <Text style={globalStyles.menuButtonText}>
            {relatorio.paciente} - {relatorio.data}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
