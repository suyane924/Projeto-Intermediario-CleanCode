import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import globalStyles from '../Styles';
import ReportBuilder from '../services/reportBuilder';
import ModalMessage from '../components/ModalMessage';

export default function Relatorio() {
  const [paciente, setPaciente] = useState('João Silva');
  const [dataInicio, setDataInicio] = useState('2024-10-01');
  const [dataFim, setDataFim] = useState('2024-10-31');
  const [feedback, setFeedback] = useState('interação social, expressão emocional');
  const [resumo, setResumo] = useState(
    'Paciente apresentou melhorias significativas na interação social e expressão de emoções.'
  );
  const [gerado, setGerado] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleGerarRelatorio = () => {
    try {
      const builder = new ReportBuilder()
        .setPatient(paciente)
        .setDateRange(dataInicio, dataFim)
        .includeFeedback(feedback)
        .setSummary(resumo);

      const relatorioFinal = builder.build();
      setGerado(relatorioFinal);
      setMensagem('Relatório gerado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao gerar relatório: ' + error.message);
    }
  };

  return (
    <SafeAreaView style={globalStyles.relatorioContainer}>
      <ScrollView>
        <Text style={globalStyles.relatorioLabel}>Paciente</Text>
        <TextInput
          style={globalStyles.relatorioTextInput}
          value={paciente}
          onChangeText={setPaciente}
        />

        <Text style={globalStyles.relatorioLabel}>Data de Início</Text>
        <TextInput
          style={globalStyles.relatorioTextInput}
          value={dataInicio}
          onChangeText={setDataInicio}
        />

        <Text style={globalStyles.relatorioLabel}>Data de Fim</Text>
        <TextInput
          style={globalStyles.relatorioTextInput}
          value={dataFim}
          onChangeText={setDataFim}
        />

        <Text style={globalStyles.relatorioLabel}>Feedback</Text>
        <TextInput
          style={globalStyles.relatorioTextInput}
          value={feedback}
          onChangeText={setFeedback}
        />

        <Text style={globalStyles.relatorioLabel}>Resumo</Text>
        <TextInput
          style={globalStyles.relatorioTextInput}
          value={resumo}
          onChangeText={setResumo}
          multiline
        />

        <TouchableOpacity style={globalStyles.cadastroButton} onPress={handleGerarRelatorio}>
          <Text style={globalStyles.cadastroButtonText}>Gerar Relatório</Text>
        </TouchableOpacity>

        {gerado && (
          <View style={globalStyles.relatorioContentContainer}>
            <Text style={globalStyles.relatorioText}>
              <Text style={{ fontWeight: 'bold' }}>Paciente:</Text> {gerado.patient}
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Período:</Text> {gerado.dateRange.startDate} até{' '}
              {gerado.dateRange.endDate}
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Feedback:</Text> {gerado.feedback.join(', ')}
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Resumo:</Text> {gerado.summary}
            </Text>
          </View>
        )}
      </ScrollView>

      <ModalMessage visible={!!mensagem} message={mensagem} onClose={() => setMensagem('')} />
    </SafeAreaView>
  );
}
