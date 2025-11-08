import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import globalStyles from '../../Styles';
import ToastMessage from './ToastMessage';

export default function CardItem({ title, description, onPress }) {
  const [toast, setToast] = React.useState(null);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      setToast('Item selecionado!');
      setTimeout(() => setToast(null), 2000);
    }
  };

  return (
    <View style={globalStyles.cardContainer}>
      <TouchableOpacity style={globalStyles.menuButton} onPress={handlePress}>
        <Text style={globalStyles.menuButtonText}>{title}</Text>
        {description ? (
          <Text style={globalStyles.cardDescription}>{description}</Text>
        ) : null}
      </TouchableOpacity>

      {toast && <ToastMessage message={toast} />}
    </View>
  );
}
