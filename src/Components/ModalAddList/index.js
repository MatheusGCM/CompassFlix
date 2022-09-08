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
  shortName,
}) {
  return (
    <Modal transparent={true} visible={modalAddList} onRequestClose={onPress}>
      <TouchableWithoutFeedback onPress={onPress} touchSoundDisabled>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxtHeader}>Nova lista</Text>
            {shortName ? (
              <Text style={{color: 'red', alignSelf: 'center'}}>
                Digite um nome valido para lista
              </Text>
            ) : null}
            <View style={styles.TextNewList}>
              <TextInput
                value={valueName}
                onChangeText={v => setValueName(v)}
                placeholder="Nome da lista"
                style={styles.BoxInputName}
              />
            </View>
            <View style={styles.BoxInputDescription}>
              <TextInput
                value={valueDescription}
                multiline={true}
                onChangeText={v => setValueDescription(v)}
                placeholder="Descrição"
                style={styles.BoxInputInsideDescription}
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
