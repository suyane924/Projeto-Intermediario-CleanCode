import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

// MOCK DE NAVEGAÇÃO
const useNavigationMock = () => {
  const [screen, setScreen] = useState('Pacientes');

  const navigate = (destination) => {
    console.log(`[NAVIGATION MOCK]: Navegando para a tela: ${destination}`);
    setScreen(destination);
  };

  return { navigate, screen };
};

// Componente Card de Paciente
function PatientCard({ paciente, onPress }) {
  let statusStyle = styles.statusAtivo;
  if (paciente.status === 'pendente') statusStyle = styles.statusPendente;
  else if (paciente.status === 'inativo') statusStyle = styles.statusInativo;

  const formattedStatus =
    paciente.status.charAt(0).toUpperCase() + paciente.status.slice(1);

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(paciente)}>
      <View style={{ flex: 1 }}>
        <Text style={styles.nome}>{paciente.nome}</Text>
        <Text style={styles.info}>Idade: {paciente.idade} anos</Text>
        <Text style={styles.sessao}>Última sessão: {paciente.ultimaSessao}</Text>
      </View>

      <View style={styles.side}>
        <View style={[styles.status, statusStyle]}>
          <Text style={styles.statusText}>{formattedStatus}</Text>
        </View>

        <TouchableOpacity style={styles.botaoMenu}>
          <Text style={styles.botaoMenuText}>Acessar Menu →</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

// MOCK DE DADOS
const DADOS_PACIENTES = [
  {
    id: 1,
    nome: 'Maria Oliveira',
    idade: 32,
    ultimaSessao: '10/10/2025',
    status: 'ativo',
  },
  {
    id: 2,
    nome: 'João Silva',
    idade: 45,
    ultimaSessao: '05/10/2025',
    status: 'pendente',
  },
  {
    id: 3,
    nome: 'Carla Souza',
    idade: 29,
    ultimaSessao: '01/09/2025',
    status: 'inativo',
  },
];

// Tela principal
export default function Pacientes() {
  const { navigate, screen } = useNavigationMock();

  if (screen !== 'Pacientes') {
    return (
      <View style={styles.telaMock}>
        <Text style={styles.telaMockText}>
          Tela: {screen} (Próxima etapa da refatoração)
        </Text>
      </View>
    );
  }

  const handlePatientPress = (paciente) => {
    console.log(`Paciente Selecionado: ${paciente.nome} (${paciente.id})`);
    navigate('Menu');
  };

  return (
    <View style={[globalStyles.container, { padding: 16 }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Lista de Pacientes</Text>
        <TouchableOpacity
          style={[globalStyles.button, styles.novoPaciente]}
          onPress={() => navigate('Cadastro')}
        >
          <Text style={globalStyles.buttonText}>+ Novo Paciente</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {DADOS_PACIENTES.map((paciente) => (
          <PatientCard
            key={paciente.id}
            paciente={paciente}
            onPress={handlePatientPress}
          />
        ))}

        <Text style={styles.footer}>
          Total de pacientes cadastrados: {DADOS_PACIENTES.length}
        </Text>
      </ScrollView>
    </View>
  );
}

// ESTILOS ESPECÍFICOS DA TELA
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  novoPaciente: {
    paddingHorizontal: 14,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  info: {
    fontSize: 14,
    color: '#475569',
    marginTop: 2,
  },
  sessao: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
  side: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  status: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
  statusAtivo: {
    backgroundColor: '#dcfce7',
    borderColor: '#16a34a',
  },
  statusPendente: {
    backgroundColor: '#fef9c3',
    borderColor: '#eab308',
  },
  statusInativo: {
    backgroundColor: '#fee2e2',
    borderColor: '#ef4444',
  },
  botaoMenu: {
    marginTop: 8,
  },
  botaoMenuText: {
    fontSize: 13,
    color: '#0891b2',
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 40,
  },
  telaMock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  telaMockText: {
    fontSize: 18,
    color: '#475569',
    textAlign: 'center',
  },
});
