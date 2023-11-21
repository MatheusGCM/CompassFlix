import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';

import {ModalButton} from '@components';

import styles from './styles';

type GenericModalProps = {
  visible: boolean;
  onConfirmPress?(): void;
  onDismissPress?(): void;
  title?: string;
  subtitle?: string;
  type?: 'logout' | 'remove' | 'create';
};

export function GenericModal({
  title,
  subtitle,
  visible,
  type,
  onConfirmPress,
  onDismissPress,
}: GenericModalProps) {
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
        <View
          style={[
            styles.body,
            {alignItems: type === 'create' ? 'center' : 'flex-start'},
          ]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.buttons}>
            <ModalButton
              label={type === 'logout' ? 'Cancelar' : 'Não'}
              type="primary"
              onPress={onDismissPress}
            />
            <ModalButton
              label="Sim"
              type="secondary"
              onPress={onConfirmPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
