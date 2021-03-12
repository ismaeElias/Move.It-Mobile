import React, {useContext} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Body from '../../public/body.svg';
import {ChallengerContext} from '../../services/context/challenger';
import {CountdownContext} from '../../services/context/countdown';

function ModalChallenger() {
  const {
    setModalVisible,
    modalVisible,
    newChallenger,
    completeChallenger,
    closeChallenger
  } = useContext(ChallengerContext);
  const {resetCountdown} = useContext(CountdownContext);
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>
                Ganhe {newChallenger.amount || 0} exp!
              </Text>
              <View style={styles.containerChallenger}>
                <Body width={150} />
                <Text style={styles.titleChallenger}>
                  {newChallenger.type.toUpperCase() || ''} Challenger!
                </Text>
                <Text style={styles.textChallenger}>
                  {newChallenger.description || ''}
                </Text>
              </View>
              <View style={styles.containerButtons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    closeChallenger();
                    resetCountdown();
                  }}>
                  <Text style={[styles.textStyle, styles.failedButton]}>
                    Falhei
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    completeChallenger();
                    resetCountdown();
                  }}>
                  <Text style={[styles.textStyle, styles.completeButton]}>
                    Completei
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    color: '#5965E0',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CFCFCF',
    width: '80%',
    padding: 10,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    flex: 1,
    alignSelf: 'stretch',
  },
  containerChallenger: {
    alignItems: 'center',
    padding: 10,
  },
  titleChallenger: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
    color: '#555555',
  },
  textChallenger: {
    textAlign: 'center',
    color: '#666666',
  },
  containerButtons: {
    borderTopWidth: 1,
    borderTopColor: '#CFCFCF',
    flexDirection: 'row',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  completeButton: {
    color: '#3FB023',
    borderLeftWidth: 1,
    borderLeftColor: '#555555',
  },
  failedButton: {
    color: '#E83F5B',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ImageType: {
    width: '80%',
    height: '50%',
  },
});

export default ModalChallenger;
