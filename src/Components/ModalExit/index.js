import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './styles';

const ModalExit = ({modalExit, onPress, logout, type}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalExit}
      onRequestClose={onPress}>
      <TouchableWithoutFeedback onPress={onPress} touchSoundDisabled>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxtHeader}>Atenção!</Text>
            <Text style={styles.modalTxtMid}>
              {type === 'exitButton'
                ? 'Deseja mesmo sair?'
                : 'Deseja mesmo remover o filme?'}
            </Text>
            <View style={styles.modalContainerFooter}>
              <View style={styles.modalContentFooter}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onPress}
                  style={styles.btn.cancelar}>
                  <Text style={styles.modalTxtFooter.white}>
                    {type === 'exitButton' ? 'CANCELAR' : 'NÃO'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={logout}
                  style={styles.btn.sim}>
                  <Text style={styles.modalTxtFooter}>SIM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalExit;
