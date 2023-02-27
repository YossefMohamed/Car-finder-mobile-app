import React from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import * as Clipboard from "expo-clipboard";
const DialogComponent = ({ visibleProp }: { visibleProp: boolean }) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  const copyText = async (text: string) => {
    await Clipboard.setStringAsync("Hello World!");
    alert("Copied to clipboard");
    hideDialog();
  };
  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Contact the seller</Dialog.Title>
        <Dialog.Description>
          Do you want to contact the seller?
        </Dialog.Description>
        <Dialog.Button label="Copy" onPress={() => copyText("0123156487")} />
        <Dialog.Button label="Call" onPress={console.log} />
        <Dialog.Button label="Cancel" onPress={hideDialog} />
      </Dialog.Container>
    </View>
  );
};

export default DialogComponent;
