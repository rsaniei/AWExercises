import React from 'react';
import { ShoppingList } from './components/ShppingList';
import ShoppingListc from './components/ShoppingListc';
import {Clock} from './components/Clock'
import { Container } from './components/Container';
import LifecycleA from './components/LifeCycleA'
import styles from './App';

function App() {

  const itemsList = [
    {
      id:1,
      name: "milk",
      count: 2
    },
     {
      id:2,
      name: "egg",
      count: 1

    },
     {
      id:3,
      name: "rice",
      count: 3
    }
  ]

  return (
    // <Container className="styles.App">
    //   <Clock></Clock>
    //   <ShoppingListc items = {itemsList}></ShoppingListc>
    // </Container>
    // <LifecycleA></LifecycleA>
    <Clock></Clock>
  );
}

export default App;
