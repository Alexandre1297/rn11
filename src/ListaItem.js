import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #EEE;
  flex-direction: row;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #CCC;
  background:${props=>props.done ? '#365314' : '#991B1B'}
`;

export default (props) => {
  return (
      <Item onPress={props.onPress} activeOpacity={0.7} >
          <>
              <ItemText>{props.data.task}</ItemText>
              <ItemCheck done ={props.data.done}></ItemCheck>
          </>
      </Item>
  );
}