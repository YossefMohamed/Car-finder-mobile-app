import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../theme/colors";
import CustomButton from "../../components/button";

export default function FilterDrawerContent({ navigation }: any) {
  const [location, setLocation] = useState();
  const [cuisines, setCuisines] = useState(1);

  const [open, setOpen] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [free, setFree] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>REGION</Text>
          <TextInput
            value={location}
            placeholder="where do you live ?"
            style={styles.input}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>CUISINES</Text>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setCuisines(1);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 1 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 1
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(2);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 2 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 2
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                American
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(3);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 3 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 3
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Asian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(4);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 4 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 4
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Burger
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(5);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 5 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 5
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Chineese
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(6);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 6 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 6
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Fast Food
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(7);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 7 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 7
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Italian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(8);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 8 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 8
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Mexican
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(9);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 9 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 9
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Pasta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(10);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 10 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 10
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Rice
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCuisines(11);
              }}
              style={[
                styles.category,
                {
                  borderColor:
                    cuisines === 11 ? colors.brand.primary : colors.brand.muted,
                },
              ]}
            >
              <Text
                style={[
                  styles.subtitle,
                  {
                    color:
                      cuisines === 11
                        ? colors.brand.primary
                        : colors.brand.muted,
                  },
                ]}
              >
                Asian
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>FILTER</Text>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            style={styles.rowFilter}
          >
            <Text style={styles.text}>Open Now</Text>
            {open && (
              <Icon name="check" size={20} color={colors.brand.primary} />
            )}
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => {
              setCreditCard(!creditCard);
            }}
            style={styles.rowFilter}
          >
            <Text style={styles.text}>Credit Card</Text>
            {creditCard && (
              <Icon name="check" size={20} color={colors.brand.primary} />
            )}
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            onPress={() => {
              setFree(!free);
            }}
            style={styles.rowFilter}
          >
            <Text style={styles.text}>Free Delivery</Text>
            {free && (
              <Icon name="check" size={20} color={colors.brand.primary} />
            )}
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>PRICE RANGE ($)</Text>
        </View>

        <CustomButton text="Apply Filter" onPress={console.log} />
      </ScrollView>
    </SafeAreaView>
  );
}
