import React from "react";
import { Text } from "./typography";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components";
import { Ionicons as Icon } from "@expo/vector-icons";

function ImageUploaderInput({
  addImageToState,
  image,
  removeImageFromState,
}: {
  addImageToState: (image: string) => void;
  image: string[];
  removeImageFromState: (idx: number) => void;
}) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
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
          {image.length ? "Add An Image" : "Upload Image"}
        </Text>
      </ImageUploaderButton>
      <ImagePreviewerContainer>
        {image.length
          ? image.map((imageURI, idx) => (
              <ImageContainerItem key={idx}>
                <CloseIconContainer onPress={() => removeImageFromState(idx)}>
                  <Icon name="close-circle" size={24} color="white" />
                </CloseIconContainer>
                <ImageUploaderImage
                  source={{
                    uri: imageURI,
                  }}
                />
              </ImageContainerItem>
            ))
          : null}
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
  width: 100%;
  height: 100%;
`;

const ImageContainerItem = styled.View`
  width: 31%;
  height: 125px;
  align-items: center;
  position: relative;

  margin: ${(props) => props.theme.space[1]};
`;

const CloseIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
`;

const ImagePreviewerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${(props) => props.theme.space[2]} 0;
`;

export default ImageUploaderInput;
