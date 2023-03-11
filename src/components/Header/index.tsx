/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter, setCategoryId } from '../../redux/filter/filterSlice';
import { useAppDispatch } from '../../redux/store';
import { Catalog } from './Catalog';
import { HeaderBody } from './Body';
import { HeaderTop } from './Top';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClickCatalog = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  const { categoryId } = useSelector(selectFilter);
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBody />
      <Catalog categoryId={categoryId} onClickCatalog={onClickCatalog} />
    </header>
  );
};
