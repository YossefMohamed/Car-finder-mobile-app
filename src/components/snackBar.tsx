import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar } from "react-native-paper";

const SnackBar = ({
  visibleProp,
  message,
}: {
  visibleProp: boolean;
  message: string;
}) => {
  const [visible, setVisible] = React.useState(visibleProp);

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
