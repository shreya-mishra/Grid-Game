import { SetStateAction } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type PropsType = {
  value: number;
  label: string;
  onChange: (text : number) => void;
};

const InputField = ({ value, label, onChange }: PropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={'Type here...'}
        value={value}
        onChangeText={onChange}
        keyboardType="number-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
  },

});

export default InputField;
