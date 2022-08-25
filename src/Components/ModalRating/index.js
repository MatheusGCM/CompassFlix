import React, {useContext, useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './style';

const ModalRating = ({modalVisible, onPress, rate, rating, setRating}) => {
  const [invalido, setInvalido] = useState(false);

  return (
    <Modal transparent={true} visible={modalVisible} onRequestClose={onPress}>
      <View style={styles.background}>
        <View style={styles.body}>
          <Text style={styles.title}>Faça a sua avaliação!</Text>

          <View style={{marginTop: 22, marginBottom: 10, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
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
                  value={rating}
                  onChangeText={value =>
                    setRating(value.replace(/[^0-9.]/g, ''))
                  }
                />
              </View>

              <Text style={styles.maxnumber}> / 10</Text>
            </View>

            {invalido ? (
              <View>
                <Text style={styles.invalidnumber}>
                  A nota deve ser entre 0,5 a 10
                </Text>
              </View>
            ) : (
              <View>
                <Text style={styles.invalidnumber} />
              </View>
            )}
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => {
                onPress();
                setInvalido(false);
                setRating('');
              }}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnOk}
              onPress={() => {
                if (rating >= 0.5 && rating <= 10) {
                  rate();
                  // setTeste(!teste);
                  setInvalido(false);
                  setRating('');
                  onPress();
                } else {
                  setInvalido(true);
                  setRating('');
                }
              }}>
              <Text style={styles.textOk}>ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalRating;
