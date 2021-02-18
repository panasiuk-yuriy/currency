import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import cn from 'classnames'
import { TextField } from "../TextField/TextField";
import { useDispatch } from 'react-redux';
import { fetchData } from '../../store/actions';
import { selectCurrencyUSD, getIsLoading } from '../../store/selectors';
import './FormField.scss';

export const FormField = () => {
  const dispatch = useDispatch();
  const rate = useSelector(selectCurrencyUSD);
  const isLoading = useSelector(getIsLoading);
  const [uahCyrrency, setUahCurrency] = useState();
  const [isSubmited, setIsSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ currency }) => {
    dispatch(fetchData())
    setUahCurrency(currency);
    setIsSubmitted(true)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <input 
          className={cn('form__input', {'form__input--error': errors.currency})}
          name="currency" 
          ref={
            register({
              required: 'Это поле обязательное',
              pattern: {
                value: /^\d+$/,
                message: 'Это поле должно содержать только цифры'
              }
            })
          }
          placeholder="Сумма, грн"
        />
        <p className="form__error--message">{errors.currency?.message}</p>
         {isSubmited && !isLoading && 
            <TextField>
              <p className="form__text">
                <b>{uahCyrrency} грн</b> по курсу{' '}
                <b>{rate}$</b> это {' '}
                <b>{(uahCyrrency / rate).toFixed(2)}$</b>
              </p>
            </TextField>
          }
        <input 
          className="button form__button"
          type="submit" 
          value='Посчитать'
          />
      </form>
      
    </>
  );
}