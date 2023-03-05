/** @format */

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__top top-header">
          <div className="top-header__container">
            <div className="top-header__menu menu">
              <nav className="menu__body">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a href="" className="menu__link">
                      Про нас
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="" className="menu__link">
                      Акції
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="" className="menu__link">
                      Оплата та доставка
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="" className="menu__link">
                      Контакти
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <a href="" className="top-header__user _icon-user">
              <span>Особистий кабінет</span>
            </a>
            <button type="button" className="icon-menu">
              <span></span>
            </button>
          </div>
        </div>
        <div className="header__body body-header">
          <div className="body-header__container">
            <a href="" className="body-header__logo">
              Granite & Marble
            </a>
            <div className="body-header__search">
              <form action="#" className="search-header">
                <button type="submit" className="search-header__button _icon-search"></button>
                <input
                  type="text"
                  name="form[]"
                  data-error="Ошибка"
                  placeholder="Пошук"
                  className="search-header__input"
                />
              </form>
            </div>
            <div className="body-header__actions actions-header">
              <a href="" className="actions-header__location _icon-location">
                <span>Бориспіль</span>
              </a>
              <div className="actions-header__phones phones-header">
                <div data-spollers className="phones-header__items">
                  <div className="phones-header__item">
                    <a href="tel:+380675561977" className="phones-header__phone">
                      067-556-19-77
                    </a>
                    <button
                      type="button"
                      data-spoller
                      className="phones-header__arrow _icon-arrow-bottom"></button>
                    <ul className="phones-header__list">
                      <li>
                        <a href="tel:+380669099669" className="phones-header__phone">
                          066-909-96-69
                        </a>
                      </li>
                      <li>
                        <a href="tel:0459565728" className="phones-header__phone">
                          04595-6-57-28
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <button type="button" data-popup="#callback" className="phones-header__callback">
                  Замовити дзвінок
                </button>
              </div>
              <a href="" className="actions-header__favorite _icon-favorite"></a>
              <div className="actions-header__cart cart-header">
                <div className="cart-header__icon _icon-cart">
                  <span>0</span>
                </div>
                <div className="cart-header__body">
                  <div className="cart-header__summ">0 грн.</div>
                  <a href="" className="cart-header__link">
                    Оформити замовлення
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__catalog catalog-header">
          <div className="catalog-header__container">
            <nav className="catalog-header__menu menu-catalog">
              <div className="menu-catalog__list">
                <div className="menu-catalog__items">
                  <div className="menu-catalog__item">
                    <button data-parent="1" className="menu-catalog__link">
                      Каталог пам'ятників
                    </button>
                  </div>
                  <div hidden data-submenu="1" className="sub-menu-catalog__column">
                    <ul className="sub-menu-catalog__list">
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники одинарні
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Подвійні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Меморіальні комплекси
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Ексклюзивні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Дитячі пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники тваринам
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники з хрестом
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-catalog__items">
                  <div className="menu-catalog__item">
                    <button data-parent="2" className="menu-catalog__link">
                      Колір граніту
                    </button>
                  </div>
                  <div hidden data-submenu="2" className="sub-menu-catalog__column">
                    <ul className="sub-menu-catalog__list">
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники одинарні
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Подвійні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Меморіальні комплекси
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Ексклюзивні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Дитячі пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники тваринам
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники з хрестом
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-catalog__items">
                  <div className="menu-catalog__item">
                    <button data-parent="3" className="menu-catalog__link">
                      Наші вироби
                    </button>
                  </div>
                  <div hidden data-submenu="3" className="sub-menu-catalog__column">
                    <ul className="sub-menu-catalog__list">
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники одинарні
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Подвійні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Меморіальні комплекси
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Ексклюзивні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Дитячі пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники тваринам
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники з хрестом
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-catalog__items">
                  <div className="menu-catalog__item">
                    <button data-parent="4" className="menu-catalog__link">
                      Аксесуари
                    </button>
                  </div>
                  <div hidden data-submenu="4" className="sub-menu-catalog__column">
                    <ul className="sub-menu-catalog__list">
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники одинарні
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Подвійні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Меморіальні комплекси
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Ексклюзивні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Дитячі пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники тваринам
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники з хрестом
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-catalog__items">
                  <div className="menu-catalog__item">
                    <button data-parent="5" className="menu-catalog__link">
                      Художні роботи
                    </button>
                  </div>
                  <div hidden data-submenu="5" className="sub-menu-catalog__column">
                    <ul className="sub-menu-catalog__list">
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники одинарні
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Подвійні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Меморіальні комплекси
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Ексклюзивні пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Дитячі пам'ятники
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники тваринам
                        </a>
                      </li>
                      <li className="sub-menu-catalog__item">
                        <a href="" className="sub-menu-catalog__link">
                          Пам'ятники з хрестом
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
