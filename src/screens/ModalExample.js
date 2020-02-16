import React, { useState } from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
const ModalExample = () => {
  const [modalVisible, setmodalVisible] = useState(false);

  const toggleModal = () => {
    setmodalVisible(!modalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={() => toggleModal()} />
      <Modal
        style={{ margin: 0 }}
        isVisible={modalVisible}
        backdropOpacity={0.5}
        coverScreen={true}
      >
        <TouchableOpacity onPress={() => toggleModal()} style={{
          flex: 1, 
          // borderWidth: 1, borderColor: 'red',
          flexDirection: 'column', justifyContent: 'flex-end',
        }} >
          <View style={{
            borderWidth: 1, borderColor: 'white',
            borderTopRightRadius: 20, borderTopLeftRadius: 20,
            backgroundColor: 'white',
            height: 120, 
            // width: null
          }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={() => toggleModal()} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default ModalExample;