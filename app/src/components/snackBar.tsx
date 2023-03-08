import * as React from "react";
import { Snackbar } from "react-native-paper";

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

export default SnackBar;
