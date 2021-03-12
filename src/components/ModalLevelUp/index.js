import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, Modal, StyleSheet} from 'react-native';
import {ChallengerContext} from '../../services/context/challenger';
import Background from '../../public/backgroundlevelUp.svg';
import Close from '../../public/close.svg';
function ModalLevelUp() {
  const {isLevelUp, setIsLevelUp, level} = useContext(ChallengerContext);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setModalVisible(!isLevelUp);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imageBackground}>
              <Background width={500} height={150}/>
            </View>
            <View style={styles.containerText}>
              <Text style={styles.numberLevel}>{level}</Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#2E384D'}}>
                Parabéns
              </Text>
              <Text style={{color: '#666666', fontSize: 18}}>
                Você alcançou um novo nivel :D
              </Text>
            </View>
            <TouchableOpacity
              style={styles.iconClose}
              onPress={() => {
                setIsLevelUp(!isLevelUp);
              }}>
              <Close />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalView: {
    position: 'relative',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageBackground: {
    position: 'absolute',
  },
  iconClose: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  numberLevel: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#5965E0',
  },
  containerText : {
    alignItems : 'center',
    marginTop: 15
  }
});

export default ModalLevelUp;
