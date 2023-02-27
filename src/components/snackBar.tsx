import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar } from "react-native-paper";

const SnackBar = ({
  visible,
  message,
  setVisible,
}: {
  visible: boolean;
  message: string;
  setVisible: (visible: boolean) => void;
}) => {
  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Dismiss",
        onPress: onDismissSnackBar,
      }}
    >
      {message}
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default SnackBar;
