import React, { useState } from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import { v4 as uuidv4 } from 'uuid';
import "react-native-get-random-values";

const Page = styled.SafeAreaView`
  flex:1;
`;

const Listagem = styled.FlatList`
  flex:1;
`;

export default () => {

  const [items, setItems] = useState(lista);

  const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push ({
      id: uuidv4(),
      task: txt,
      done: false
    });
    setItems(newItems);
  }

  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  }

  return (
    <Page>
      <AddItemArea onAdd = {addNewItem}/>
      <Listagem
        data = {items}
        renderItem = {({item, index}) => <ListaItem onPress = {() => toggleDone(index)} data = {item} />}
      />
    </Page>
  );
}
