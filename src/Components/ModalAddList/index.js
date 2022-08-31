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

export default function ModalAddList({modalAddList, onPress, action}) {
  return (
    <Modal transparent={true} visible={modalAddList} onRequestClose={onPress}>
      <TouchableWithoutFeedback onPress={onPress} touchSoundDisabled>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxtHeader}>Nova lista</Text>
            <TextInput />
            <View style={styles.modalContainerFooter}>
              <View style={styles.modalContentFooter}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onPress}
                  style={styles.btn.cancelar}>
                  <Text style={styles.modalTxtFooter.white}>CANCELAR</Text>
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
