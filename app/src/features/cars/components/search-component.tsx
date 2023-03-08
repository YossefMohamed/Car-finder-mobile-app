import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

function SearchComponent({
  onChangeSearch,
  searchQuery,
}: {
  onChangeSearch: (text: string) => void;
  searchQuery: string;
}) {
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} 0;
`;

export default SearchComponent;
