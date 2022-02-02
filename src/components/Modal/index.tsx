import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/shoppingCart';
import * as S from './styles'

export function Modal() {

   const { clearShoppingCart } = useShoppingCart();

   return (
      <S.WrapperModal>
         <div className={'modal'}>
            <div className={'modalWrapper'}>
               <h2>Thank you!</h2>
               <p>We hope you enjoy !</p>
               <Link to='/'>
                  <button
                     className={'button'}
                     style={{ fontSize: 18, height: 45 }}
                     onClick={() => clearShoppingCart()}
                  >
                     Go back to Store
                  </button>
               </Link>
            </div>
         </div>
      </S.WrapperModal>
   )
}