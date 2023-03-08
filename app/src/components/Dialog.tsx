import React from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import * as Clipboard from "expo-clipboard";
import { Linking } from "react-native";
const DialogComponent = ({
  visible = false,
  action,
  setVisible,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  action: () => void;
}) => {
  const hideDialog = () => {
    setVisible(false);
  };
  const copyText = async (text: string) => {
    await Clipboard.setStringAsync(text);
    setVisible(false);
  };
  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Contact the seller</Dialog.Title>
        <Dialog.Description>
          Do you want to contact the seller?
        </Dialog.Description>
        <Dialog.Button
          label="Copy"
          onPress={() => {
            copyText("0123156487");
            action();
          }}
        />
        <Dialog.Button
          label="Call"
          onPress={() => {
            Linking.openURL(`tel:0123156487`);
          }}
        />
        <Dialog.Button label="Cancel" onPress={hideDialog} />
      </Dialog.Container>
    </View>
  );
};

export default DialogComponent;
