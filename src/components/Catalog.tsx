/** @format */

import React from 'react';

type categoriesProps = {
  id: string;
  menuCatalog: string;
  submenuCatalog: string[];
};

export const Catalog: React.FC<categoriesProps> = ({ menuCatalog, submenuCatalog }) => {
  return (
    <div className="menu-catalog__items">
      <div className="menu-catalog__item">
        <div className="menu-catalog__link">{menuCatalog}</div>
      </div>
      <div className="sub-menu-catalog__column">
        <ul className="sub-menu-catalog__list">
          {submenuCatalog.map((obj, index) => (
            <li key={index} className="sub-menu-catalog__item">
              <a href="" className="sub-menu-catalog__link">
                {obj}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
