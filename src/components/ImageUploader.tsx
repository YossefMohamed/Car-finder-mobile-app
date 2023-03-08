import React from "react";
import { Text } from "./typography";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components";
import { Ionicons as Icon } from "@expo/vector-icons";

function ImageUploaderInput() {
  const [image, setImage] = React.useState<any[]>([]);

  const addImageToState = (uri: string) => {
    setImage((prevState) => [...prevState, uri]);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      addImageToState(result.assets[0].uri);
    }
  };

  return (
    <ImageUploaderContainer>
      <Text variant="caption">Image Upload</Text>
      <ImageUploaderButton onPress={pickImage}>
        <IconContainer>
          <Icon name="camera-sharp" size={24} color="white" />
        </IconContainer>
        <Text variant="caption">
          {image.length ? "Add more Images" : "Upload Image"}
        </Text>
      </ImageUploaderButton>
      <ImagePreviewerContainer>
        {image.length &&
          image.map((imageURI, idx) => (
            <ImageUploaderImage
              key={idx}
              source={{
                uri: imageURI,
              }}
            />
          ))}
      </ImagePreviewerContainer>
    </ImageUploaderContainer>
  );
}

const ImageUploaderContainer = styled.View`
  width: 100%;
`;
const ImageUploaderButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding: ${(props) => props.theme.space[1]};
  margin: ${(props) => props.theme.space[1]} 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.brand.muted};
`;

const IconContainer = styled.View`
  margin-right: ${(props) => props.theme.space[1]};
`;
const ImageUploaderImage = styled.Image`
  border-radius: 4px;
  width: 32%;
  height: 125px;
  margin: ${(props) => props.theme.space[1]} 0;
`;
const ImagePreviewerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${(props) => props.theme.space[2]} 0;
  justify-content: space-between;
`;
export default ImageUploaderInput;
