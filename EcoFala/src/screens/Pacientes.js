import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles';
import { getPacientes } from '../services/pacienteService';

export default function Pacientes({ navigation }) {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    async function carregarPacientes() {
      const data = await getPacientes();
      setPacientes(data);
    }
    carregarPacientes();
  }, []);

  const handleSelectPaciente = () => {
    navigation.navigate('Menu');
  };

  const handleAddPaciente = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={globalStyles.pacientesContainer}>
      <Text style={globalStyles.pacientesTitulo}>Selecionar Pacientes</Text>

      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleSelectPaciente}>
            <View style={globalStyles.pacienteContainer}>
              <Image source={{ uri: item.foto }} style={globalStyles.pacienteFoto} />
              <Text style={globalStyles.pacienteNome}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={globalStyles.pacienteButton} onPress={handleAddPaciente}>
        <Text style={globalStyles.menuButtonText}>ADICIONAR PACIENTE</Text>
      </TouchableOpacity>
    </View>
  );
}
