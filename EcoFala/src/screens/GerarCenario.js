import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import globalStyles from '../../Styles';
import ToastMessage from '../../components/ToastMessage';

export default function GerarCenario({ navigation }) {
  const [cenario, setCenario] = useState({
    tema: '',
    objetivos: '',
    descricao: '',
  });

  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const handleChange = (field, value) => setCenario({ ...cenario, [field]: value });

  const handleSubmit = () => {
    const camposVazios = Object.values(cenario).some(valor => valor.trim() === '');
    if (camposVazios) {
      showToast('Erro: Por favor, preencha todos os campos.', 'error');
      return;
    }

    showToast('Cenário: Dados cadastrados com sucesso!');
    navigation.navigate('Pacientes');
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <Text style={globalStyles.title}>GERAR CENÁRIO</Text>

        <Text style={globalStyles.label}>Tema do Cenário</Text>
        <TextInput
          style={globalStyles.input}
          value={cenario.tema}
          onChangeText={(text) => handleChange('tema', text)}
        />

        <Text style={globalStyles.label}>Objetivos</Text>
        <TextInput
          style={globalStyles.input}
          value={cenario.objetivos}
          onChangeText={(text) => handleChange('objetivos', text)}
        />

        <Text style={globalStyles.label}>Descrição</Text>
        <TextInput
          style={[globalStyles.input, { height: 100 }]}
          value={cenario.descricao}
          onChangeText={(text) => handleChange('descricao', text)}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity style={globalStyles.cadastroButton} onPress={handleSubmit}>
          <Text style={globalStyles.cadastroButtonText}>Gerar</Text>
        </TouchableOpacity>

        <ToastMessage
          message={toast.message}
          type={toast.type}
          visible={toast.visible}
          onHide={() => setToast({ ...toast, visible: false })}
        />
      </ScrollView>
    </View>
  );
}
