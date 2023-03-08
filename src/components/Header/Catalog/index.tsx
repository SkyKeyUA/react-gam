/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
type CatalogProps = {
  toggleCatalog: boolean;
  categoryId: number;
  onClickCatalog: (i: number) => void;
};
export const Catalog: React.FC<CatalogProps> = React.memo(
  ({ toggleCatalog, categoryId, onClickCatalog }) => {
    const categories = [
      {
        id: 0,
        menuCatalog: "Каталог пам'ятників",
        submenuCatalog: [
          "Пам'ятники одинарні",
          "Подвійні пам'ятники",
          'Меморіальні комплекси',
          "Ексклюзивні пам'ятники",
          "Дитячі пам'ятники",
          "Пам'ятники тваринам",
          "Пам'ятники з хрестом",
        ],
      },
      {
        id: 1,
        menuCatalog: 'Колір граніту',
        submenuCatalog: [
          "Пам'ятники одинарні",
          "Подвійні пам'ятники",
          'Меморіальні комплекси',
          "Ексклюзивні пам'ятники",
          "Дитячі пам'ятники",
          "Пам'ятники тваринам",
          "Пам'ятники з хрестом",
        ],
      },
      {
        id: 2,
        menuCatalog: 'Наші вироби',
        submenuCatalog: [
          "Пам'ятники одинарні",
          "Подвійні пам'ятники",
          'Меморіальні комплекси',
          "Ексклюзивні пам'ятники",
          "Дитячі пам'ятники",
          "Пам'ятники тваринам",
          "Пам'ятники з хрестом",
        ],
      },
      {
        id: 3,
        menuCatalog: 'Аксесуари',
        submenuCatalog: [
          "Пам'ятники одинарні",
          "Подвійні пам'ятники",
          'Меморіальні комплекси',
          "Ексклюзивні пам'ятники",
          "Дитячі пам'ятники",
          "Пам'ятники тваринам",
          "Пам'ятники з хрестом",
        ],
      },
      {
        id: 4,
        menuCatalog: 'Художні роботи',
        submenuCatalog: [
          "Пам'ятники одинарні",
          "Подвійні пам'ятники",
          'Меморіальні комплекси',
          "Ексклюзивні пам'ятники",
          "Дитячі пам'ятники",
          "Пам'ятники тваринам",
          "Пам'ятники з хрестом",
        ],
      },
    ];
    return (
      <div className="header__catalog catalog-header">
        <div className="catalog-header__container">
          <nav className="catalog-header__menu menu-catalog">
            <div className="menu-catalog__list">
              {categories.map((obj) => (
                <div
                  onClick={() => onClickCatalog(obj.id)}
                  key={obj.id}
                  className="menu-catalog__items">
                  <div className="menu-catalog__item">
                    <div
                      className={`menu-catalog__link ${
                        categoryId === obj.id && toggleCatalog ? 'open' : ''
                      }`}>
                      {obj.menuCatalog}
                    </div>
                  </div>
                  <div
                    className={`sub-menu-catalog__column ${
                      categoryId === obj.id && toggleCatalog ? 'open' : ''
                    }`}>
                    <ul className="sub-menu-catalog__list">
                      {obj.submenuCatalog.map((subobj, index) => (
                        <li key={index} className="sub-menu-catalog__item">
                          <Link to="" className="sub-menu-catalog__link">
                            {subobj}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    );
  },
);