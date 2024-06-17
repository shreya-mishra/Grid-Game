import { Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../components/base/Form/Button/PrimaryButton";
import Form from "../../components/base/Form";

const InputForm = () => {
    const [playerCount, setPlayerCount] = useState('');
    const [rowsCount,setRowsCount] = useState('');
    const [colCount,setColCount] = useState('');
    const [isError , setIsError] = useState('')

  const onPressHandler = () => {
    if (!handleValidation()) {
      return;
    }
    if (isNaN(Number(rowsCount)) || isNaN(Number(colCount)) || Number(rowsCount) <= 3 || Number(colCount) <= 3) {
      setIsError('Rows and Columns should be more than 3');
      return false;
    }
    setIsError('');
    return true;
  };


  const handleValidation = () => {
    if (!playerCount || !rowsCount || !colCount) {
      setIsError('Please fill all the fields');
      return false;
    } else {
      setIsError('');
      return true;
    }
  };
  return (
    <View>
      <Text style={{fontSize: 20, margin: 16, fontWeight:'bold'}}>Grid Game</Text>
      <Form.InputField label={"Player Count"} value={playerCount} onChange={(text: number) => setPlayerCount(text)} />
      <Form.InputField label={"Rows"} value={rowsCount} onChange={(text: number) => setRowsCount(text)} />
      <Form.InputField label={"Columns"} value={colCount} onChange={(text: number) => setColCount(text)} />
      {isError && <Text style={{ color: 'red', marginLeft: 20 }}>{isError}</Text>}
      <PrimaryButton
        disabled={false}
        onPress={onPressHandler}
        title={"Submit"}
      />
    </View>
  );
};

export default InputForm;
