import React, {useContext} from 'react';
import {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './style';
import api, {postRatingFilm} from '../../../service/api';
import {Context} from '../../../context';

const EvaluateModal = ({
  visible,
  setModalVisible,
  setCurrentRating,
  setRated,
  movieDetailsId,
}) => {
  const {id, setSucess, sucess} = useContext(Context);
  const [rating, setRating] = useState('');
  const [invalidRating, setInvalideRating] = useState(false);

  const ratingIsValid = userRating => {
    return userRating >= 0.5 &&
      userRating <= 10 &&
      userRating[0] !== '.' &&
      userRating[userRating.length - 1] !== '.' &&
      userRating !== ''
      ? true
      : false;
  };
  const sendPostRatingValue = async value => {
    await postRatingFilm(movieDetailsId, id, value);
    setSucess(!sucess);
  };
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.background}>
        <View style={styles.body}>
          <Text style={styles.title}>Faça a sua avaliação!</Text>

          <View style={styles.ratingbody}>
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
                onChangeText={value => setRating(value.replace(/[^0-9.]/g, ''))}
                value={rating}
              />
            </View>

            <Text style={styles.maxnumber}> / 10</Text>
          </View>

          {invalidRating && (
            <Text style={styles.invalidnumber}>
              A nota deve ser entre 0,5 a 10
            </Text>
          )}

          <View style={[styles.buttons, {marginTop: invalidRating ? 10 : 32}]}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => {
                setInvalideRating(false);
                setModalVisible(false);
                setRating('');
              }}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnOk}
              onPress={() => {
                if (ratingIsValid(rating) === false) {
                  return setInvalideRating(true);
                }
                sendPostRatingValue(rating);
                setModalVisible('false');
              }}>
              <Text style={styles.textOk}>ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EvaluateModal;
