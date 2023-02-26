import * as React from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Provider, Text } from "react-native-paper";

const Dialog = ({ visibleProp }: { visibleProp: boolean }) => {
  const [visible, setVisible] = React.useState(visibleProp);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default Dialog;
