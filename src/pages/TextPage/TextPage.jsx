import React from 'react';
import { useLocation } from 'react-router-dom';
import { TextField } from '../../components/TextField/TextField';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const TextPage = () => {
  let query = useQuery();

  const id = query.get("id")
  const date = query.get("date")

  return (
    <>
      <h3 className="title">Текстовая страница</h3>
      <TextField>
        <p className='text'>
          {
            `Это простая текстовая страница 
            для отображения параметров роута. 
            Параметры:
            - id: ${id}
            - date: ${date}`
          }
        </p>
      </TextField>
      
    </>
  );
};

