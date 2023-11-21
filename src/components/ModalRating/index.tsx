import React, {useState} from 'react';
import {Modal, Text, TextInput, Pressable, View} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './style';

type ModalRatingProps = {
  visible: boolean;
  onDismissPress(): void;
  onConfirmPress(rating: number): void;
};

export function ModalRating({
  visible,
  onDismissPress,
  onConfirmPress,
}: ModalRatingProps) {
  const [value, setValue] = useState<string>('');
  const [invalido, setInvalido] = useState<boolean>(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onDismissPress}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Pressable
          android_disableSound
          style={styles.background}
          onPress={onDismissPress}
        />
        <View style={styles.body}>
          <Text style={styles.title}>Faça a sua avaliação!</Text>

          <View style={styles.container}>
            <View style={styles.boxContainer}>
              <View style={styles.bodyinput}>
                <EvilIcons
                  style={styles.icon}
                  name="pencil"
                  size={20}
                  color="#C4C4C4"
                />

                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={3}
                  value={value}
                  onChangeText={value =>
                    setValue(value.replace(/[^0-9.]/g, ''))
                  }
                />
              </View>

              <Text style={styles.maxnumber}> / 10</Text>
            </View>

            {invalido && (
              <View>
                <Text style={styles.invalidnumber}>
                  A nota deve ser entre 0,5 a 10
                </Text>
              </View>
            )}
          </View>

          <View style={styles.buttons}>
            <Pressable style={styles.btnCancel} onPress={onDismissPress}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </Pressable>

            <Pressable
              disabled={invalido}
              style={styles.btnOk}
              onPress={() => {
                const rating = Number(value);
                if (rating >= 0.5 && rating <= 10 && rating % 0.5 === 0) {
                  onConfirmPress(rating);
                } else {
                  setInvalido(true);
                  setValue('');
                }
              }}>
              <Text style={styles.textOk}>ok</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
