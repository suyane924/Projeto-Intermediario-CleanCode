import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

export default function ModalMessage({ visible, title, message, onClose }) {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-6 rounded-2xl w-3/4">
          <Text className="text-lg font-bold mb-2">{title}</Text>
          <Text className="mb-4">{message}</Text>
          <TouchableOpacity
            className="bg-blue-500 rounded-xl p-2"
            onPress={onClose}
          >
            <Text className="text-white text-center font-semibold">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
