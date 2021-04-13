import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDiet } from '../store/actions/dietActions';
import DietForm from '../components/DietForm';
import Diet from '../components/Diet';


const DietScreen = () => {
  const [search1, setSearch] = useState('');
  const [loading1, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data1, error1 } = useSelector(state => state.diet);

  const searchSubmitHandler = () => {
    if (search1 === '') {
      return Alert.alert('Validation', 'Food name is required!', [{ text: 'OK' }]);
    }

    setLoading(true);
    dispatch(getDiet(search1, () => setLoading(false), () => setLoading(false)));
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <DietForm search1={search1} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
        <Diet loading1={loading1} data1={data1} error1={error1} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DietScreen;