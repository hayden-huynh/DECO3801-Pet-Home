import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import TextInput from '../../../../../components/TextInput';

const styles = StyleSheet.create({
  center: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  add: {
    color: 'black',
    marginTop: 12,
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    color: 'black',
    marginVertical: 12,
  },
});

const AddPet = ({ navigation }: any) => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [description, setDescription] = useState<string[]>([]);

  return (
    <ScrollView contentContainerStyle={styles.center}>
      <View style={styles.modalView}>
        <TextInput
          label="Name"
          autoCapitalize="sentences"
          autoFocus
          maxLength={30}
          onChangeText={(value) => setName(value)}
        />
        <RNPickerSelect
          onValueChange={(value) => setType(value)}
          placeholder={{ label: 'Select a type of pet...', value: null }}
          items={[
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' },
            { label: 'Hamster', value: 'hamster' },
          ]}
          style={pickerSelectStyles}
        />
        <TextInput
          label="Breed"
          autoCapitalize="sentences"
          maxLength={30}
          onChangeText={(value) => setBreed(value)}
        />
        <TextInput
          label="Age"
          keyboardType="numeric"
          maxLength={3}
          onChangeText={(value) => setAge(+value)}
        />
        <TextInput
          label="Description"
          multiline
          numberOfLines={7}
          onChangeText={(value) => setDescription(value.split(/\r?\n/))}
        />
        <TouchableOpacity
          onPress={() => {
            const petData = { name, type, breed, age, description };
            navigation.navigate('PickImages', { petData, mode: 'ADD' });
          }}>
          <Text style={styles.add}>Choose Images</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddPet;
