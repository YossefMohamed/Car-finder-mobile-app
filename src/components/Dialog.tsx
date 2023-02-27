import React from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import * as Clipboard from "expo-clipboard";
import SnackBar from "./snackBar";
const DialogComponent = ({ visibleProp }: { visibleProp: boolean }) => {
  const [visible, setVisible] = React.useState(visibleProp);
  const [snackBar, setSnackBar] = React.useState(false);
  const hideDialog = () => setVisible(false);

  const copyText = async (text: string) => {
    await Clipboard.setStringAsync(text);

    hideDialog();
  };
  return (
    <View>
      <SnackBar
        message={"The number is copied to the clipboard "}
        visibleProp={snackBar}
      />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Contact the seller</Dialog.Title>
        <Dialog.Description>
          Do you want to contact the seller?
        </Dialog.Description>
        <Dialog.Button
          label="Copy"
          onPress={() => {
            copyText("0123156487");
            setSnackBar(true);
          }}
        />
        <Dialog.Button label="Call" onPress={console.log} />
        <Dialog.Button label="Cancel" onPress={hideDialog} />
      </Dialog.Container>
    </View>
  );
};

export default DialogComponent;
