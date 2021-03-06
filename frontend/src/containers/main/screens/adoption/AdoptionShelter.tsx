import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import Button from '../../../../components/Button';
import theme from '../../../../core/theme';
import { fromPets, useAppDispatch } from '../../../../store';
import CardItem from './CardItem';

const styles = StyleSheet.create({
  container: { flex: 1 },
  addButtonContainer: {
    position: 'absolute',
    bottom: 3,
    right: 13,
    zIndex: 100,
    alignSelf: 'flex-end',
  },
  addButton: {
    backgroundColor: theme.colors.button,
    borderRadius: 100,
    alignSelf: 'center',
    padding: 0,
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
});

const AdoptionShelter = ({ navigation }: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const pets = useSelector(fromPets.selectAllPets);
  const petLoading = useSelector(fromPets.selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(fromPets.doGetOwnedPets());
      } catch (e) {
        console.log(e);
      }
    })();
    setRefreshing(false);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setSelectedId(null);
  };

  const renderItem = ({ item }: any) => {
    const visible = item._id === selectedId;
    return (
      <CardItem
        item={item}
        onPress={() => {
          if (!selectedId) setSelectedId(item._id);
          else setSelectedId(null);
        }}
        visible={visible}
        navigation={navigation}
      />
    );
  };

  const handleAddPet = () => {
    navigation.navigate('AddPet');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spinner
        visible={petLoading}
        textContent="Loading..."
        animation="fade"
        textStyle={{ color: 'white' }}
      />
      <View style={styles.addButtonContainer}>
        <Button style={styles.addButton} labelStyle={styles.addButtonText} onPress={handleAddPet}>
          +
        </Button>
      </View>
      <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={selectedId}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
};

export default AdoptionShelter;
