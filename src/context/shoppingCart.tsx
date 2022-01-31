import { createContext, ReactNode, useContext, useState } from "react";
import Comic from "../types/Comic";

type ShoppingCartComic = {
   comic: Comic;
   quantity: number;
}
type PropsShoppingCartContext = {
   shoppingCart: ShoppingCartComic[] | null;
   addComic: (comic: Comic, quantity: number) => void
   removeComic: (comic: Comic) => void;
   clearShoppingCart: () => void;
   getNumberOfComics: () => number;
   getTotalValue: () => number;
   cartActive: boolean,
   handleCartActive: (value: boolean) => void;
}

type ShoppingCartProvider = {
   children: ReactNode;
}

const ShoppingCartContext = createContext({} as PropsShoppingCartContext);

export const ShoppingCartContextProvider = (props: ShoppingCartProvider) => {

   const [shoppingCart, setShoppingCart] = useState<ShoppingCartComic[] | []>([]);
   const [cartActive, setCartActive] = useState(false);

   function handleCartActive(value: boolean){
      setCartActive(value);
   }

   function addComic(newComic: Comic, quantity: number) {
      const checkDuplicate = shoppingCart.filter(comic => {
         return comic.comic.id == newComic.id
      });
      if (checkDuplicate.length > 0) {
          
         const auxShoppingCart = [...shoppingCart];

         const comicId = shoppingCart.findIndex((cartItem => cartItem.comic.id == newComic.id));

         auxShoppingCart[comicId].quantity++;

         setShoppingCart(auxShoppingCart);

         return;
        
      }
      setShoppingCart(
         prevCartComic => [
            ...prevCartComic, {
               comic: newComic,
               quantity: quantity
            }
         ]
      );
   
   }
   function removeComic(comicRemove: Comic) {

      setShoppingCart(shoppingCart.filter(comic => comic.comic.id !== comicRemove.id));

   }
   function clearShoppingCart() {
      setShoppingCart([]);
   }

   function getNumberOfComics(){
      let numberOfComics = 0;
      shoppingCart.map(cartItem =>{
         const {quantity} = cartItem;
         numberOfComics+= quantity;
      });
      console.log(numberOfComics)
      return numberOfComics;
   }
   function getTotalValue() {

      let total = 0;
      shoppingCart.map(cartItem => {
         const {comic, quantity} = cartItem;
         total+= comic.price * quantity
      });
      
      return total;
   }

return (
   <ShoppingCartContext.Provider
      value={{
         shoppingCart,
         addComic,
         removeComic,
         clearShoppingCart,
         getNumberOfComics,
         getTotalValue,
         cartActive,
         handleCartActive
      }}
   >
      {props.children}
   </ShoppingCartContext.Provider>
)
}

export const useShoppingCart = () => useContext(ShoppingCartContext);
