import { useShoppingCart } from '../../context/shoppingCart';
import { BsTrashFill, BsFillCartXFill, BsPlusCircle } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import * as S from './styles';
import {
    addressPattern,
    zipPattern,
    cityPattern,
    emailPattern,
    namePattern,
    phonePattern,
    statePattern,
} from '../../helpers/formValidation';
import { useState } from 'react';
import { Modal } from '../../components/Modal';

export function Checkout() {

    
    const { shoppingCart, getTotalValue, removeComic, handleCartActive } =
    useShoppingCart();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const [showModal, setShowModal] = useState(false);
    const [ coupon, setCoupon ] = useState<string>();
    const [ discountRegular, setDiscountRegular] = useState<number>();
    const [ discountGold, setDiscountGold] = useState<number>();
    const [ totalValue, setTotalValue ] = useState<number>();
    
    function handleSetTotal() {
        let total = 0
        let discountRegular = 0
        let discountGold = 0
       shoppingCart?.map(cartItem =>{
           const { comic, quantity } = cartItem;
           if(coupon === 'neo') setDiscountRegular(discountRegular = 10)!;
           if(coupon === 'gold') setDiscountGold(discountGold = 10)!
           total += (comic.price - (comic.rare > 0 ? discountRegular : discountGold)) * quantity ;
       })
       setTotalValue(total);
    }

    
    
    
    const onSubmit = () => {
        setShowModal(true);
    };
    
    return (
        <>
            <main>
            {showModal ? <Modal /> : null}
            <S.Wrapper>
                {shoppingCart?.length == 0 ? (
                    <div className='noItems'>
                        <BsFillCartXFill size={40} />
                        <h1>You need to add some itens first....</h1>
                    </div>
                ) : (
                    <>
                        
                        <form
                            id='checkoutForm'
                            onSubmit={handleSubmit(onSubmit)}
                            className='checkoutForm'
                        >
                            <h1>Checkout</h1>
                            <label className='errorMessage' htmlFor='name'>
                                {errors.name && errors.name.message}
                            </label>
                            <input
                                id='name'
                                type='text'
                                placeholder='Fullname'
                                title='Type your fullname'
                                className={`${'input'} ${
                                    errors.name ? 'inputError' : ''
                                }`}
                                {...register('name', {
                                    required: true,
                                    pattern: {
                                        value: namePattern,
                                        message: 'Invalid Name',
                                    },
                                })}
                                required
                            />

                            <div className='fieldsetWrapper'>
                                <fieldset className='inputSmall'>
                                    <label
                                        className={'errorMessage'}
                                        htmlFor='phone'
                                    >
                                        {errors.phone && errors.phone.message}
                                    </label>
                                    <input
                                        id='phone'
                                        type='tel'
                                        placeholder='Phone'
                                        title='Type your phone, only numbers'
                                        maxLength={11}
                                        className={`${'input'} ${
                                            errors.phone ? 'inputError' : ''
                                        }`}
                                        {...register('phone', {
                                            required: true,
                                            pattern: {
                                                value: phonePattern,
                                                message: 'Invalid phone',
                                            },
                                        })}
                                    />
                                </fieldset>
                                <fieldset>
                                    <label
                                        className={'errorMessage'}
                                        htmlFor='email'
                                    >
                                        {errors.email && errors.email.message}
                                    </label>
                                    <input
                                        id='email'
                                        type='email'
                                        placeholder='E-mail'
                                        title='Type your email'
                                        className={`${'input'} ${
                                            errors.email ? 'inputError' : ''
                                        }`}
                                        {...register('email', {
                                            required: true,
                                            pattern: {
                                                value: emailPattern,
                                                message: 'E-mail inválido',
                                            },
                                        })}
                                    />
                                </fieldset>
                            </div>
                            <div className='fieldsetWrapper'>
                                <fieldset className={'inputSmall'}>
                                    <label
                                        className={'errorMessage'}
                                        htmlFor='cep'
                                    >
                                        {errors.cep && errors.cep.message}
                                    </label>
                                    <input
                                        id='zip'
                                        type='text'
                                        placeholder='ZipCode'
                                        title='Type your ZipCode, only numbers'
                                        maxLength={8}
                                        className={`${'input'} ${
                                            errors.cep ? 'inputError' : ''
                                        }`}
                                        {...register('cep', {
                                            required: true,
                                            pattern: {
                                                value: zipPattern,
                                                message: 'Invalid ZipCode',
                                            },
                                        })}
                                    />
                                </fieldset>
                                <fieldset>
                                    <label
                                        className={'errorMessage'}
                                        htmlFor='address'
                                    >
                                        {errors.address &&
                                            errors.address.message}
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Address'
                                        title='Type your address'
                                        className={`${'input'} ${
                                            errors.address ? 'inputError' : ''
                                        }`}
                                        {...register('address', {
                                            required: true,
                                            pattern: {
                                                value: addressPattern,
                                                message: 'Invalid address',
                                            },
                                        })}
                                    />
                                </fieldset>
                            </div>
                            <div className='fieldsetWrapper'>
                                <fieldset className='inputMedium'>
                                    <label
                                        className={'errorMessage'}
                                        htmlFor='city'
                                    >
                                        {errors.city && errors.city.message}
                                    </label>
                                    <input
                                        id='city'
                                        type='text'
                                        placeholder='City'
                                        title='Type your city'
                                        className={`${'input'} ${
                                            errors.city ? 'inputError' : ''
                                        }`}
                                        {...register('city', {
                                            required: true,
                                            pattern: {
                                                value: cityPattern,
                                                message: 'Invalid city',
                                            },
                                        })}
                                    />
                                </fieldset>
                                <fieldset className='inputMedium'>
                                    <label
                                        className={'errorMessage'}
                                        htmlFor='state'
                                    >
                                        {errors.state && errors.state.message}
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='State'
                                        title='Type you state'
                                        className={`${'input'} ${
                                            errors.state ? 'inputError' : ''
                                        }`}
                                        {...register('state', {
                                            required: true,
                                            pattern: {
                                                value: statePattern,
                                                message: 'Invalid state,at least 3 characters',
                                            },
                                        })}
                                    />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className='inputMedium'>
                                    <label
                                        className={'errorMessage'}
                                        htmlFor='coupon'
                                    >
                                        {errors.coupon && errors.coupon.message}
                                    </label>
                                    <div className='couponInputWrapper'>
                                        <input
                                            type='text'
                                            placeholder='Discount coupon'
                                            title='coupon'
                                            value={undefined}
                                            onChange={(e) => setCoupon(e.target.value)}
                                            className={`${'input'} ${
                                                errors.coupon
                                                    ? 'inputError'
                                                    : ''
                                            }`}
                                        />
                                        <button
                                            className='addIcon'
                                            title='addCoupon'
                                            onClick={
                                                (e) => {e.preventDefault()
                                                        handleSetTotal()
                                                    }
                                            }
                                        >
                                            <BsPlusCircle />
                                        </button>
                                    </div>
                                </fieldset>
                            </div>
                        </form>
                        <div className='checkoutItems'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                {shoppingCart?.map(shoppingItem => {
                                    const { comic, quantity } = shoppingItem;
                                    return (
                                        <tbody key={comic.id}>
                                            <tr>
                                                <td>
                                                    <div className={'poster'}>
                                                        <img
                                                            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                                        />
                                                    </div>
                                                </td>
                                                <td
                                                    className={`${
                                                        comic.rare === 0
                                                            ? 'rareItem'
                                                            : ''
                                                    }`}
                                                >
                                                    {comic.title}
                                                </td>
                                                <td
                                                    className={`${'quantity'} ${
                                                        comic.rare === 0
                                                            ? 'rareItem'
                                                            : ''
                                                    }`}
                                                >
                                                    {quantity}
                                                </td>
                                                <td
                                                    className={`${'price'} ${
                                                        comic.rare === 0
                                                            ? 'rareItem'
                                                            : ''
                                                    }`}
                                                >
                                                    $ {((discountRegular && comic.rare > 0 || discountGold && comic.rare === 0) ? 
                                                        comic.price - 10 : comic.price).toFixed(2)}
                                                </td>
                                                <td>
                                                    <button
                                                        className={'trashIcon'}
                                                        onClick={() =>
                                                            removeComic(comic)
                                                        }
                                                        title='Remove'
                                                    >
                                                        <BsTrashFill
                                                            size={20}
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                            </table>
                            <div className='bottom'>
                                <div className='total'>
                                    <p>Total:</p>
                                    <p className='totalValue'>
                                        $ {(totalValue === undefined ? getTotalValue() : totalValue).toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    className='button'
                                    style={{ fontSize: 18, height: 45 }}
                                    type='submit'
                                    form='checkoutForm'
                                    onClick={() => handleCartActive(false)}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </S.Wrapper>
            </main>
        </>
    );
}
