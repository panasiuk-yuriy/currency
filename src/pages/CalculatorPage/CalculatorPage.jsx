import React from 'react';
import { useSelector } from 'react-redux'
import { FormField } from '../../components/FormField/FormFied';
import { getIsLoading } from '../../store/selectors';
import { SemipolarLoading } from 'react-loadingg';

export const CalculatorPage = () => {
  const isLoading = useSelector(getIsLoading);

  return (
      <>
      <h3 className="title">Калькулятор</h3>
      <FormField />
      {isLoading && <SemipolarLoading color="#FF4A4A"/>}
      </>

  );
};

