import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles';
import { patientSchema } from '../data/patientSchema';
import ToastMessage from '../components/ToastMessage';

export default function Cadastro({ navigation }) {
  const [paciente, setPaciente] = useState(patientSchema);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const handleChange = (field, value) => setPaciente({ ...paciente, [field]: value });

  const handleSubmit = () => {
    const camposVazios = Object.values(paciente).some((valor) => valor.trim() === '');
    if (camposVazios) {
      showToast('Erro: Por favor, preencha todos os campos.', 'error');
      return;
    }

    showToast('Cadastro: Dados cadastrados com sucesso!');
    navigation.navigate('Pacientes');
  };

  return (
    <SafeAreaView style={globalStyles.cadastroContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {Object.keys(paciente).map((key) => (
          <SafeAreaView key={key} style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </Text>
            <TextInput
              style={globalStyles.cadastroInput}
              value={paciente[key]}
              onChangeText={(text) => handleChange(key, text)}
            />
          </SafeAreaView>
        ))}

        <TouchableOpacity onPress={() => navigation.navigate('Pacientes')}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        <ToastMessage
          message={toast.message}
          type={toast.type}
          visible={toast.visible}
          onHide={() => setToast({ ...toast, visible: false })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
