import React from 'react';
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';

export default function ModalAddList({
  modalAddList,
  onPress,
  action,
  valueName,
  valueDescription,
  setValueDescription,
  setValueName,
}) {
  return (
    <Modal transparent={true} visible={modalAddList} onRequestClose={onPress}>
      <TouchableWithoutFeedback onPress={onPress} touchSoundDisabled>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxtHeader}>Nova lista</Text>
            <View
              style={{
                height: 30,
                backgroundColor: '#c4c4c459',
                marginTop: 5,
                borderRadius: 5,
              }}>
              <TextInput
                value={valueName}
                onChangeText={v => setValueName(v)}
                placeholder="Nome da lista"
                style={{
                  paddingLeft: 16,
                  color: 'black',
                  height: 34,
                  fontSize: 12,
                  width: '95%',
                }}
              />
            </View>
            <View
              style={{
                height: 50,
                backgroundColor: '#c4c4c459',
                marginTop: 5,
                borderRadius: 5,
                marginBottom: 17,
              }}>
              <TextInput
                value={valueDescription}
                multiline={true}
                onChangeText={v => setValueDescription(v)}
                placeholder="Descrição"
                style={{
                  paddingLeft: 16,
                  color: 'black',
                  fontSize: 12,
                  width: '95%',
                }}
              />
            </View>
            <View style={styles.modalContainerFooter}>
              <View style={styles.modalContentFooter}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onPress}
                  style={styles.btn.cancelar}>
                  <Text style={styles.modalTxtFooter.black}>CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={action}
                  style={styles.btn.sim}>
                  <Text style={styles.modalTxtFooter}>SALVAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
