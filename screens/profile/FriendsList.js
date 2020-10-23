
import React from "react";
import styled from "styled-components";

const View = styled.View`
  justify-content:center;
  align-items:center;
  flex:1; 
`;

const Text = styled.Text`
  font-weight:600;
`;

const FriendsList = () => {
  return <View><Text>this is FriendsList</Text></View>
};

export default FriendsList;