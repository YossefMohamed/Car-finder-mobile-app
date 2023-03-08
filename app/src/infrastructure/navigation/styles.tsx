import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { fontSizes } from "../theme/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  item: {
    marginVertical: 10,
  },
  title: {
    color: colors.text.primary,
    fontWeight: "bold",
    fontSize: 8,
    marginVertical: 5,
  },
  input: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.brand.primary,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  subtitle: {
    color: colors.text.disabled,
    fontWeight: "700",
    fontSize: 10,
  },
  category: {
    margin: 3,
    borderRadius: 15,
    borderWidth: 2,
    padding: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: colors.text.primary,
    fontSize: 10,
  },
  line: {
    backgroundColor: colors.text.disabled,
    height: 1,
    marginVertical: 10,
  },
  rowFilter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 30,
    backgroundColor: colors.brand.primary,
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTxt: {
    color: colors.text.inverse,
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default styles;
