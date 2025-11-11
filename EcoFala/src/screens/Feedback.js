import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles';
import { feedbackSchema } from '../data/feedbackSchema';
import ToastMessage from '../components/ToastMessage';

export default function Feedback() {
  const [feedback, setFeedback] = useState(feedbackSchema);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const handleChange = (field, value) => setFeedback({ ...feedback, [field]: value });

  const handleSubmit = () => {
    const camposVazios = Object.values(feedback).some((valor) => valor.trim() === '');
    if (camposVazios) {
      showToast('Erro: Por favor, preencha todos os campos.', 'error');
      return;
    }

    showToast('Feedback: Dados cadastrados com sucesso!');
  };

  return (
    <SafeAreaView style={globalStyles.feedbackContainer}>
      <ScrollView contentContainerStyle={globalStyles.feedbackScrollContainer}>
        <Text style={globalStyles.feedbackTitle}>FEEDBACK DO PACIENTE</Text>

        {Object.keys(feedback).map((key) => (
          <SafeAreaView key={key} style={globalStyles.feedbackInputContainer}>
            <Text style={globalStyles.feedbackLabel}>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </Text>
            <TextInput
              style={globalStyles.feedbackInput}
              value={feedback[key]}
              onChangeText={(text) => handleChange(key, text)}
              multiline
              textAlignVertical="top"
            />
          </SafeAreaView>
        ))}

        <TouchableOpacity style={globalStyles.cadastroButton} onPress={handleSubmit}>
          <Text style={globalStyles.cadastroButtonText}>Enviar</Text>
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
