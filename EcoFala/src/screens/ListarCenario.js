import React from 'react';
import { ScrollView, View } from 'react-native';
import globalStyles from '../../Styles';
import CardItem from '../components/CardItem';
import { getCenarios } from '../services/cenarioService';

export default function ListarCenario({ navigation }) {
  const [cenarios, setCenarios] = React.useState([]);

  React.useEffect(() => {
    getCenarios().then(setCenarios);
  }, []);

  return (
    <View style={globalStyles.Listacontainer}>
      <ScrollView>
        {cenarios.map((cenario, index) => (
          <CardItem
            key={index}
            title={cenario.titulo}
            description={cenario.descricao}
            onPress={() => navigation.navigate('DetalhesCenario', { cenario })}
          />
        ))}
      </ScrollView>
    </View>
  );
}
