import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import globalStyles from '../Styles';

// MOCKS DE DADOS 
const DADOS_PACIENTES = [
  { id: 'p_101', nome: 'João Silva', idade: 25, ultimaSessao: '28/10/2025', status: 'ativo' },
  { id: 'p_102', nome: 'Maria Souza', idade: 40, ultimaSessao: '25/10/2025', status: 'pendente' },
  { id: 'p_103', nome: 'Carlos Mendes', idade: 18, ultimaSessao: '29/10/2025', status: 'ativo' },
  { id: 'p_104', nome: 'Ana Costa', idade: 60, ultimaSessao: '20/10/2025', status: 'inativo' },
  { id: 'p_105', nome: 'Pedro Lima', idade: 33, ultimaSessao: '30/10/2025', status: 'ativo' },
  { id: 'p_106', nome: 'Sofia Nunes', idade: 22, ultimaSessao: '01/11/2025', status: 'ativo' },
];

// função que simula fetch 
const fetchPatients = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return DADOS_PACIENTES.map((p) => ({ ...p, foto: `https://i.pravatar.cc/100?u=${p.id}` }));
};


// Mock de navegação 

const useNavigationMock = () => {
  const [screen, setScreen] = useState('Pacientes');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = (destination, params = {}) => {
    setScreen(destination);
    if (destination === 'Menu' && params.paciente) setSelectedPatient(params.paciente);
    if (destination === 'Pacientes') setSelectedPatient(null);
  };

  return { navigate, screen, selectedPatient };
};


function PatientCard({ paciente, onPress }) {
  const statusColors = {
    ativo: { backgroundColor: 'rgba(114,195,178,0.12)', borderColor: '#72C3B2', textColor: '#72C3B2' },
    pendente: { backgroundColor: 'rgba(250,204,21,0.12)', borderColor: '#FACC15', textColor: '#FACC15' },
    inativo: { backgroundColor: 'rgba(248,113,113,0.12)', borderColor: '#F87171', textColor: '#F87171' },
  };

  const sc = statusColors[paciente.status] || statusColors.ativo;
  const formattedStatus = paciente.status.charAt(0).toUpperCase() + paciente.status.slice(1);

  return (
    <TouchableOpacity onPress={() => onPress(paciente)} activeOpacity={0.8} style={styles.cardContainer}>
      <View style={styles.cardLeft}>
        <Image source={{ uri: paciente.foto }} style={globalStyles.pacienteFoto} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.cardName} numberOfLines={1}>{paciente.nome}</Text>
          <Text style={styles.cardMeta}>Idade: {paciente.idade} anos</Text>
          <Text style={styles.cardMetaSmall}>Última sessão: {paciente.ultimaSessao}</Text>
        </View>
      </View>

      <View style={styles.cardRight}>
        <View style={[styles.statusBadge, { backgroundColor: sc.backgroundColor, borderColor: sc.borderColor }]}>
          <Text style={[styles.statusText, { color: sc.textColor }]}>{formattedStatus}</Text>
        </View>

        <Text style={styles.accessText}>Acessar Menu →</Text>
      </View>
    </TouchableOpacity>
  );
}


// Tela de Menu (mesmo comportamento, visual adaptado ao Styles.js)
function MenuScreen({ navigation, paciente }) {
  return (
    <SafeAreaView style={globalStyles.menuContainer}>
      <Text style={[globalStyles.menuButtonText, { fontSize: 28, marginBottom: 10 }]}>Menu do Paciente</Text>
      <Text style={{ color: '#72C3B2', fontSize: 18, marginBottom: 24 }}>{paciente?.nome || 'Paciente não encontrado'}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Pacientes')} style={globalStyles.menuButton}>
        <Text style={globalStyles.menuButtonText}>{'<- Voltar para Lista'}</Text>
      </TouchableOpacity>

      <Text style={{ color: '#6b7280', marginTop: 24, textAlign: 'center', paddingHorizontal: 20 }}>
        Esta é uma tela de placeholder que será refatorada em seguida.
      </Text>
    </SafeAreaView>
  );
}


// Componente Principal 
export default function App() {
  const { navigate, screen, selectedPatient } = useNavigationMock();
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // carrega dados no mount
  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (err) {
        console.error('Erro ao carregar pacientes:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadPatients();
  }, []);

  // rota mockada 
  if (screen === 'Menu') {
    return <MenuScreen navigation={{ navigate }} paciente={selectedPatient} />;
  }

  const handlePatientPress = (paciente) => navigate('Menu', { paciente });
  const handleAddPaciente = () => navigate('Cadastro');

  return (
    <SafeAreaView style={globalStyles.pacientesContainer}>
      {/* Título conforme visual do primeiro arquivo */}
      <Text style={globalStyles.pacientesTitulo}>Selecionar Pacientes</Text>

      {isLoading ? (
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <ActivityIndicator size="large" color="#72C3B2" />
          <Text style={{ color: '#72C3B2', marginTop: 12 }}>Carregando pacientes...</Text>
        </View>
      ) : (
        <FlatList
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PatientCard paciente={item} onPress={handlePatientPress} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120, paddingTop: 8 }}
        />
      )}

      {/* Botão para adicionar paciente — visual do globalStyles */}
      <View style={styles.footerArea}>
        <TouchableOpacity style={globalStyles.pacienteButton} onPress={handleAddPaciente} activeOpacity={0.85}>
          <Text style={globalStyles.menuButtonText}>ADICIONAR PACIENTE</Text>
        </TouchableOpacity>

        <Text style={{ color: '#6b7280', textAlign: 'center', marginTop: 8 }}>
          Total de pacientes cadastrados: {patients.length}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 10,
    marginBottom: 12,
    alignItems: 'center',
    // sombra (Android + iOS)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#72C3B2',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    maxWidth: 200,
  },
  cardMeta: {
    color: '#6b7280',
    fontSize: 13,
    marginTop: 2,
  },
  cardMetaSmall: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 2,
  },
  cardRight: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    borderWidth: 1,
    marginBottom: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
  accessText: {
    color: '#72C3B2',
    fontSize: 13,
    fontWeight: '600',
  },
  footerArea: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 18,
    backgroundColor: 'transparent',
  },
});
