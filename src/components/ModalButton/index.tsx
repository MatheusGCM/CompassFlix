import React from 'react';
import {Text, Pressable} from 'react-native';

import styles from './style';

type ModalButtonProps = {
  onPress?(): void;
  label: string;
  disabled?: boolean;
  type: 'primary' | 'secondary';
};

export function ModalButton({
  onPress,
  label,
  disabled,
  type,
}: ModalButtonProps) {
  const primaryButton = type === 'primary';
  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.containerButton,
        {
          borderWidth: primaryButton ? 0 : 1,
          backgroundColor: primaryButton ? '#000000' : '#ffffff',
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.textButton,
          {color: primaryButton ? '#ffffff' : '#000000'},
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}
