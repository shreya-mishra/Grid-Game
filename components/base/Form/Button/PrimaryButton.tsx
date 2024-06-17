import { Pressable, StyleSheet, Text } from "react-native";

type PropType = {
    disabled: boolean;
    title: string;
    onPress: () => void;
}
const PrimaryButton = ({ disabled, title, onPress }: PropType) => {

  return (
    <Pressable style={styles.primaryButton} disabled={disabled} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        margin:15,
        borderRadius: 5,
        alignItems: 'center',
      },
      primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },    
});
