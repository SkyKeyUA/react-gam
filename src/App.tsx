/** @format */

import { Catalog } from './components/Catalog';
import './scss/app.scss';

function App() {
  const menuList = [' Про нас', 'Акції', 'Оплата та доставка', 'Контакти'];
  const phoneNumber = [
    { fullNumber: '+380669099669', shortNumber: '067-556-19-77' },
    { fullNumber: '0459565728', shortNumber: ' 04595-6-57-28' },
  ];
  const categories = [
    {
      id: '0',
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
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
    <div className="App">
      <header className="header">
        <div className="header__top top-header">
          <div className="top-header__container">
            <div className="top-header__menu menu">
              <nav className="menu__body">
                <div className="menu__list">
                  {menuList.map((name, index) => (
                    <li key={index} className="menu__item">
                      <a href="" className="menu__link">
                        {name}
                      </a>
                    </li>
                  ))}
                </div>
              </nav>
            </div>
            <a href="" className="top-header__user">
              <svg
                width="30"
                height="37"
                viewBox="0 0 30 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_39_2889)">
                  <path
                    d="M14.5941 15.3117C14.6201 15.3117 14.6461 15.3117 14.6773 15.3117C14.6877 15.3117 14.6981 15.3117 14.7085 15.3117C14.7242 15.3117 14.745 15.3117 14.7606 15.3117C16.2849 15.2831 17.5179 14.6931 18.4283 13.5646C20.4313 11.0784 20.0983 6.81654 20.0619 6.40983C19.9319 3.35661 18.6208 1.89587 17.5387 1.21419C16.7323 0.704369 15.7907 0.429408 14.7398 0.406494H14.7033C14.6981 0.406494 14.6877 0.406494 14.6825 0.406494H14.6513C14.0738 0.406494 12.9397 0.509605 11.8524 1.19128C10.7598 1.87296 9.42801 3.33369 9.29795 6.40983C9.26153 6.81654 8.92857 11.0784 10.9315 13.5646C11.8368 14.6931 13.0698 15.2831 14.5941 15.3117ZM10.687 6.55304C10.687 6.53585 10.6922 6.51867 10.6922 6.50721C10.8639 2.39997 13.512 1.95888 14.6461 1.95888H14.6669C14.6773 1.95888 14.6929 1.95888 14.7085 1.95888C16.1132 1.99325 18.5012 2.62337 18.6624 6.50721C18.6624 6.52439 18.6624 6.54158 18.6676 6.55304C18.6728 6.59313 19.037 10.4884 17.3826 12.5392C16.7271 13.3526 15.8531 13.7536 14.7033 13.7651C14.6929 13.7651 14.6877 13.7651 14.6773 13.7651C14.6669 13.7651 14.6617 13.7651 14.6513 13.7651C13.5068 13.7536 12.6275 13.3526 11.9772 12.5392C10.328 10.4999 10.6818 6.58741 10.687 6.55304Z"
                    fill="white"
                  />
                  <path
                    d="M25.3682 22.3805C25.3682 22.3748 25.3682 22.3691 25.3682 22.3633C25.3682 22.3175 25.363 22.2717 25.363 22.2201C25.3318 21.0859 25.2641 18.4337 23.0062 17.5859C22.9906 17.5801 22.9698 17.5744 22.9542 17.5687C20.6079 16.9099 18.6569 15.4206 18.6361 15.4034C18.3188 15.157 17.8817 15.243 17.658 15.5924C17.4343 15.9418 17.5124 16.423 17.8297 16.6693C17.9182 16.7381 19.9888 18.3248 22.5796 19.0581C23.7918 19.5335 23.9271 20.9599 23.9635 22.266C23.9635 22.3175 23.9635 22.3633 23.9687 22.4092C23.9739 22.9247 23.9427 23.721 23.8594 24.1792C23.0166 24.7062 19.713 26.5279 14.6874 26.5279C9.68257 26.5279 6.35816 24.7005 5.51015 24.1735C5.42691 23.7152 5.39049 22.919 5.40089 22.4034C5.40089 22.3576 5.4061 22.3118 5.4061 22.2602C5.44251 20.9542 5.57778 19.5278 6.78997 19.0523C9.38082 18.3191 11.4514 16.7266 11.5399 16.6636C11.8572 16.4173 11.9353 15.9361 11.7116 15.5867C11.4878 15.2372 11.0508 15.1513 10.7335 15.3976C10.7127 15.4148 8.77213 16.9042 6.41539 17.563C6.39458 17.5687 6.37897 17.5744 6.36336 17.5801C4.10547 18.4337 4.03783 21.0859 4.00662 22.2144C4.00662 22.266 4.00662 22.3118 4.00142 22.3576C4.00142 22.3633 4.00142 22.3691 4.00142 22.3748C3.99621 22.6727 3.99101 24.2021 4.26674 24.9697C4.31877 25.1187 4.41242 25.2447 4.53728 25.3306C4.69335 25.4452 8.43396 28.0688 14.6926 28.0688C20.9512 28.0688 24.6918 25.4395 24.8479 25.3306C24.9676 25.2447 25.0664 25.1187 25.1185 24.9697C25.3786 24.2079 25.3734 22.6784 25.3682 22.3805Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_39_2889"
                    x="0"
                    y="0.406494"
                    width="29.3696"
                    height="35.6623"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_39_2889"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_39_2889"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="275" height="27" viewBox="0 0 275 27">
                <path
                  data-name="Granite & Marble"
                  className="body-header__logo"
                  d="M24.173,0.214a3.656,3.656,0,0,1-.841,1.026,1.4,1.4,0,0,1-.785.213A3.908,3.908,0,0,1,21.272,1.1,12.65,12.65,0,0,0,16.43.214,15.7,15.7,0,0,0,9.482,1.822,16.57,16.57,0,0,0,5.038,5.01,17.026,17.026,0,0,0,1.628,9.962,14.436,14.436,0,0,0,.261,16.144a11.187,11.187,0,0,0,1.173,4.869,9.181,9.181,0,0,0,3.631,3.936,12.261,12.261,0,0,0,6.412,1.488,14.428,14.428,0,0,0,3.271-.36,25.648,25.648,0,0,0,4.084-1.451l1.848-6.339a16.228,16.228,0,0,1,1.016-2.9,2.705,2.705,0,0,1,1.109-1.072,5.2,5.2,0,0,1,2.07-.333l0.185-.721H14.638l-0.2.721h0.517a4.535,4.535,0,0,1,2.513.536,1.181,1.181,0,0,1,.48,1.016,8.055,8.055,0,0,1-.388,2.125l-1.83,6.449a21.722,21.722,0,0,1-2.485.739,8.8,8.8,0,0,1-1.746.166,6.292,6.292,0,0,1-5.525-2.55A10.269,10.269,0,0,1,4.178,16.4a16.612,16.612,0,0,1,2.9-9.554q3.64-5.4,9.388-5.4a6.479,6.479,0,0,1,4.407,1.4,4.166,4.166,0,0,1,1.6,3.206,19.078,19.078,0,0,1-.166,2.051h0.7l1.866-7.891h-0.7Zm2.9,10.626a10.806,10.806,0,0,1,1.423-.166,1.523,1.523,0,0,1,.979.3,0.683,0.683,0,0,1,.277.554,11.7,11.7,0,0,1-.591,2.846L25.744,25.845h2.827l0.591-2.328q0.111-.425.887-2.532a13.929,13.929,0,0,1,1.331-2.753,40.212,40.212,0,0,1,3.326-4.694,6.493,6.493,0,0,1,1.46-1.441,1.239,1.239,0,0,1,.591-0.148,0.481,0.481,0,0,1,.351.148,0.713,0.713,0,0,1,.166.462,1.336,1.336,0,0,0,.379.85,1.047,1.047,0,0,0,.73.277,1.387,1.387,0,0,0,1.275-.832,4.657,4.657,0,0,0,.628-2.328,1.437,1.437,0,0,0-.351-1.044,1.28,1.28,0,0,0-.961-0.36,4.312,4.312,0,0,0-2.439,1.257A29.984,29.984,0,0,0,30.659,18.1L33.32,9.121l-6.375,1.035ZM54.516,9.565l-0.665,2.107a3.705,3.705,0,0,0-1.136-1.959,2.933,2.933,0,0,0-1.876-.591,6.91,6.91,0,0,0-4.01,1.552,15.255,15.255,0,0,0-4.481,5.22,13.066,13.066,0,0,0-1.765,6.2,4.509,4.509,0,0,0,.979,3.077,3,3,0,0,0,2.328,1.118,5.422,5.422,0,0,0,2.864-.905,18.081,18.081,0,0,0,4.454-4.417l-0.388,1.386a9.478,9.478,0,0,0-.407,2.384,1.563,1.563,0,0,0,.4,1.155,1.619,1.619,0,0,0,1.192.4A4.283,4.283,0,0,0,54.5,25.282a11.628,11.628,0,0,0,2.624-2.929l-0.628-.443a10.723,10.723,0,0,1-1.922,2.217,1.165,1.165,0,0,1-.628.3,0.474,0.474,0,0,1-.37-0.166,0.783,0.783,0,0,1-.185-0.517,1.864,1.864,0,0,1,.055-0.407l0.407-1.682,3.6-12.529Zm-1.977,1.22a3.437,3.437,0,0,1,.61,2.273,12.9,12.9,0,0,1-3.16,8.113q-2.366,2.975-4.38,2.975a1.863,1.863,0,0,1-1.441-.73,2.942,2.942,0,0,1-.628-1.986,13.183,13.183,0,0,1,1.469-5.581,13.523,13.523,0,0,1,3.354-4.657,4.029,4.029,0,0,1,2.513-1.109A2.089,2.089,0,0,1,52.539,10.785Zm8.039-.517,0.111,0.665,0.7-.111a6.944,6.944,0,0,1,.776-0.074,1.127,1.127,0,0,1,.8.3,0.95,0.95,0,0,1,.323.711,15.177,15.177,0,0,1-.591,2.513L59.34,25.845h2.772L63.036,22.8a17.969,17.969,0,0,1,1.441-3.437A38.685,38.685,0,0,1,67.6,14.471a11.107,11.107,0,0,1,2.846-2.744,2.482,2.482,0,0,1,1.238-.444,0.821,0.821,0,0,1,.591.231,0.8,0.8,0,0,1,.24.6,8.282,8.282,0,0,1-.407,2.162l-2.144,7.429a12.917,12.917,0,0,0-.628,3.049,1.53,1.53,0,0,0,.406,1.118,1.455,1.455,0,0,0,1.09.416,3.561,3.561,0,0,0,1.922-.721,13.888,13.888,0,0,0,3.252-3.511l-0.573-.351a12.342,12.342,0,0,1-2.144,2.365,0.952,0.952,0,0,1-.536.24,0.415,0.415,0,0,1-.314-0.176,0.649,0.649,0,0,1-.148-0.434,9.4,9.4,0,0,1,.388-1.645l2.255-7.78a11.254,11.254,0,0,0,.536-2.957,2.169,2.169,0,0,0-.6-1.589,2.049,2.049,0,0,0-1.525-.61,5.466,5.466,0,0,0-3.539,1.626,39.37,39.37,0,0,0-5.294,6.782l2.458-8.408ZM84.694,2.321a1.784,1.784,0,0,0-.536,1.312,1.777,1.777,0,0,0,.545,1.3,1.829,1.829,0,0,0,2.606,0,1.778,1.778,0,0,0,.545-1.3A1.856,1.856,0,0,0,84.694,2.321ZM79.87,10.156v0.721a13.733,13.733,0,0,1,1.682-.2,1.129,1.129,0,0,1,.785.259,0.857,0.857,0,0,1,.287.665,13.311,13.311,0,0,1-.591,2.55l-2.4,8.279a9.471,9.471,0,0,0-.462,2.273,1.5,1.5,0,0,0,.481,1.137,1.732,1.732,0,0,0,1.238.453,3.969,3.969,0,0,0,2.4-.979,13.084,13.084,0,0,0,2.957-3.234L85.6,21.651a11.073,11.073,0,0,1-2.125,2.365,1.178,1.178,0,0,1-.665.3,0.554,0.554,0,0,1-.416-0.185,0.668,0.668,0,0,1-.176-0.48,9.69,9.69,0,0,1,.37-1.571L86.246,9.121Zm17.2-5.618a15.394,15.394,0,0,1-3.012,3.816,9.046,9.046,0,0,1-3.382,1.654l-0.185.721h2.791L90.2,21.429a12.305,12.305,0,0,0-.591,3.049,1.746,1.746,0,0,0,.517,1.3,1.818,1.818,0,0,0,1.331.508,3.692,3.692,0,0,0,2.088-.7,13.113,13.113,0,0,0,3.215-3.493l-0.61-.462a22.312,22.312,0,0,1-1.977,2.273,2.168,2.168,0,0,1-1.22.647,0.455,0.455,0,0,1-.351-0.166,0.7,0.7,0,0,1-.148-0.48,10.911,10.911,0,0,1,.517-2.273l3.178-10.9h2.883l0.314-1.164h-2.9l1.441-5.026H97.075ZM108.9,17.7a11.225,11.225,0,0,0,4.73-2.957,4.433,4.433,0,0,0,1.22-2.938,2.4,2.4,0,0,0-.942-1.885,4.438,4.438,0,0,0-2.9-.795,9.881,9.881,0,0,0-5.285,1.6,12.835,12.835,0,0,0-4.269,4.481,11.07,11.07,0,0,0-1.7,5.636,5.846,5.846,0,0,0,1.368,3.751,4.9,4.9,0,0,0,4.065,1.7q3.974,0,8.353-4.343l-0.388-.536a20.7,20.7,0,0,1-3.65,2.412,6.242,6.242,0,0,1-2.559.545,3.867,3.867,0,0,1-2.828-1.155,3.8,3.8,0,0,1-1.164-2.8,11.336,11.336,0,0,1,.13-1.534A26.3,26.3,0,0,0,108.9,17.7h0Zm-2.578-5.646a6.055,6.055,0,0,1,4-2,1.911,1.911,0,0,1,1.395.48,1.684,1.684,0,0,1,.489,1.257,4.374,4.374,0,0,1-1.136,2.689,8.98,8.98,0,0,1-3.409,2.43,15.619,15.619,0,0,1-4.454,1.072A12.054,12.054,0,0,1,106.324,12.05Zm38.409,1.358a2.292,2.292,0,0,1,1.294.351,0.928,0.928,0,0,1,.351.739q0,2.07-2.864,5.525a40.664,40.664,0,0,1-3.271-9.221q4.1-1.331,5.692-3.142a5.692,5.692,0,0,0,1.589-3.788,3.457,3.457,0,0,0-1.1-2.615A4.157,4.157,0,0,0,143.44.214a6.209,6.209,0,0,0-4.768,2.181,8.528,8.528,0,0,0-1.977,5.95q0,0.518.046,1.136T136.88,10.8q-5.619,1.9-7.448,3.53a7.634,7.634,0,0,0-2.79,5.821,5.976,5.976,0,0,0,1.82,4.528,7.186,7.186,0,0,0,5.165,1.737,12.122,12.122,0,0,0,4.112-.665,15.2,15.2,0,0,0,3.908-2.2,8.324,8.324,0,0,0,2.569,2.208,6.707,6.707,0,0,0,3.068.656,6.058,6.058,0,0,0,2.938-.674,7.377,7.377,0,0,0,2.347-2.19h-0.832a3.845,3.845,0,0,1-2.846,1.349q-2.55,0-4.749-3.714,1.2-1.571,3.031-4.232a10.176,10.176,0,0,1,2.4-2.661,6.355,6.355,0,0,1,2.643-.887v-0.7h-7.485v0.7Zm-5.008-5.516a12.339,12.339,0,0,1-.092-1.414,6.245,6.245,0,0,1,.924-3.844,2.787,2.787,0,0,1,2.255-1.164,2.21,2.21,0,0,1,1.681.684,2.607,2.607,0,0,1,.647,1.866,4.878,4.878,0,0,1-1.349,3.308A11.231,11.231,0,0,1,140,9.62Q139.817,8.678,139.725,7.893Zm-1.062,9.8a25.414,25.414,0,0,0,2.282,4.823,14.507,14.507,0,0,1-2.873,1.691,6.59,6.59,0,0,1-2.357.4,5.168,5.168,0,0,1-3.871-1.525,5.291,5.291,0,0,1-1.488-3.853,6.282,6.282,0,0,1,1.571-4,11.8,11.8,0,0,1,5.137-3.262A34.147,34.147,0,0,0,138.663,17.7ZM169.5,0.787l-0.185.684a8.271,8.271,0,0,1,2.051.351,3.523,3.523,0,0,1,1.165.85l-5.452,18.683a8.376,8.376,0,0,1-1.238,2.883,3.355,3.355,0,0,1-2.643.924h-0.5l-0.2.684h8.261l0.2-.684a5.622,5.622,0,0,1-2.421-.49,1.207,1.207,0,0,1-.5-1.044,12.082,12.082,0,0,1,.573-2.661l4.472-15.5,2.347,20.383h0.739L190.784,5.462l-4.139,14.525a21.981,21.981,0,0,1-1.266,3.65,2.623,2.623,0,0,1-1.025,1.118,4.538,4.538,0,0,1-2.144.407h-0.5l-0.185.684h10.552l0.166-.684H191.8a3.669,3.669,0,0,1-2.218-.536,1.273,1.273,0,0,1-.5-1.09,8.306,8.306,0,0,1,.407-2.181l4.638-15.892a10.311,10.311,0,0,1,1.1-2.772,2.556,2.556,0,0,1,1.118-.961,13.667,13.667,0,0,1,2.347-.259V0.787h-6.117l-14.543,20.18-2.31-20.18H169.5Zm40.581,8.778-0.665,2.107a3.707,3.707,0,0,0-1.137-1.959,2.931,2.931,0,0,0-1.875-.591,6.907,6.907,0,0,0-4.01,1.552,15.263,15.263,0,0,0-4.482,5.22,13.074,13.074,0,0,0-1.765,6.2,4.51,4.51,0,0,0,.98,3.077,3,3,0,0,0,2.328,1.118,5.426,5.426,0,0,0,2.865-.905,18.081,18.081,0,0,0,4.453-4.417l-0.388,1.386a9.478,9.478,0,0,0-.406,2.384,1.563,1.563,0,0,0,.4,1.155,1.619,1.619,0,0,0,1.192.4,4.284,4.284,0,0,0,2.5-1.007,11.631,11.631,0,0,0,2.624-2.929l-0.629-.443a10.707,10.707,0,0,1-1.922,2.217,1.162,1.162,0,0,1-.628.3,0.472,0.472,0,0,1-.369-0.166,0.78,0.78,0,0,1-.185-0.517,1.855,1.855,0,0,1,.055-0.407l0.407-1.682,3.6-12.529Zm-1.977,1.22a3.44,3.44,0,0,1,.61,2.273,12.9,12.9,0,0,1-3.16,8.113q-2.367,2.975-4.38,2.975a1.865,1.865,0,0,1-1.442-.73,2.947,2.947,0,0,1-.628-1.986,13.189,13.189,0,0,1,1.469-5.581,13.539,13.539,0,0,1,3.354-4.657,4.03,4.03,0,0,1,2.514-1.109A2.089,2.089,0,0,1,208.1,10.785Zm8.186,0.055a10.8,10.8,0,0,1,1.423-.166,1.52,1.52,0,0,1,.979.3,0.683,0.683,0,0,1,.278.554,11.723,11.723,0,0,1-.592,2.846l-3.418,11.476h2.827l0.591-2.328q0.111-.425.887-2.532a13.924,13.924,0,0,1,1.331-2.753,40.2,40.2,0,0,1,3.326-4.694,6.507,6.507,0,0,1,1.46-1.441,1.24,1.24,0,0,1,.591-0.148,0.482,0.482,0,0,1,.352.148,0.715,0.715,0,0,1,.166.462,1.332,1.332,0,0,0,.379.85,1.046,1.046,0,0,0,.73.277,1.388,1.388,0,0,0,1.275-.832,4.664,4.664,0,0,0,.628-2.328,1.437,1.437,0,0,0-.351-1.044,1.281,1.281,0,0,0-.961-0.36,4.313,4.313,0,0,0-2.439,1.257,29.99,29.99,0,0,0-5.877,7.724l2.661-8.981-6.375,1.035ZM233.435,0.6V1.3a8.169,8.169,0,0,1,1.183-.129,2.01,2.01,0,0,1,1.256.333,0.875,0.875,0,0,1,.3.721,17.17,17.17,0,0,1-.647,2.624L229.906,24.2a9.915,9.915,0,0,0,5.728,2.088,9.362,9.362,0,0,0,5.064-1.645,13.079,13.079,0,0,0,4.268-4.592,11.748,11.748,0,0,0,1.7-5.923,5.068,5.068,0,0,0-1.293-3.659,4.406,4.406,0,0,0-3.326-1.349,5.938,5.938,0,0,0-2.763.684,12.84,12.84,0,0,0-3.095,2.532l3.64-12.769Zm1.645,15.486a7.538,7.538,0,0,1,2.347-3.835,5.215,5.215,0,0,1,3.363-1.377,2.565,2.565,0,0,1,1.987.961,3.909,3.909,0,0,1,.84,2.661,13.694,13.694,0,0,1-1.284,5.71,9.428,9.428,0,0,1-3.031,4.019,6.007,6.007,0,0,1-3.372,1.192,6.956,6.956,0,0,1-3.253-1.016ZM252.765,0.621V1.3a9.728,9.728,0,0,1,1.293-.129,1.714,1.714,0,0,1,1.091.286,0.9,0.9,0,0,1,.351.73,17.888,17.888,0,0,1-.61,2.439l-5.008,17.334a12.907,12.907,0,0,0-.591,2.735,1.537,1.537,0,0,0,.471,1.109,1.576,1.576,0,0,0,1.173.481,3.855,3.855,0,0,0,2.07-.7,13.526,13.526,0,0,0,3.234-3.456l-0.555-.573a10.061,10.061,0,0,1-2.014,2.347,1.271,1.271,0,0,1-.757.314,0.575,0.575,0,0,1-.435-0.185,0.644,0.644,0,0,1-.175-0.462,11.582,11.582,0,0,1,.462-2.014l6.32-21.991ZM268.676,17.7a11.225,11.225,0,0,0,4.73-2.957,4.438,4.438,0,0,0,1.22-2.938,2.4,2.4,0,0,0-.942-1.885,4.438,4.438,0,0,0-2.9-.795,9.881,9.881,0,0,0-5.285,1.6,12.835,12.835,0,0,0-4.269,4.481,11.071,11.071,0,0,0-1.7,5.636,5.846,5.846,0,0,0,1.368,3.751,4.9,4.9,0,0,0,4.065,1.7q3.974,0,8.353-4.343l-0.388-.536a20.7,20.7,0,0,1-3.65,2.412,6.242,6.242,0,0,1-2.559.545,3.867,3.867,0,0,1-2.828-1.155,3.8,3.8,0,0,1-1.164-2.8,11.336,11.336,0,0,1,.13-1.534,26.3,26.3,0,0,0,5.821-1.183h0ZM266.1,12.05a6.055,6.055,0,0,1,4-2,1.912,1.912,0,0,1,1.4.48,1.684,1.684,0,0,1,.489,1.257,4.374,4.374,0,0,1-1.136,2.689,8.976,8.976,0,0,1-3.41,2.43,15.6,15.6,0,0,1-4.453,1.072A12.054,12.054,0,0,1,266.1,12.05Z"
                />
              </svg>
            </a>
            <div className="body-header__search">
              <div className="search-header">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z"
                    fill="#575757"
                  />
                </svg>
                <input className="search-header__input" placeholder="Search..." type="text" />
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z"
                    fill="#ecf1f2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 1H8C4.13401 1 1 4.13401 1 8V24C1 27.866 4.13401 31 8 31H24C27.866 31 31 27.866 31 24V8C31 4.13401 27.866 1 24 1ZM8 0C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0H8Z"
                    fill="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </div>
            </div>
            <div className="body-header__actions actions-header">
              <a href="" className="actions-header__location">
                <svg
                  width="17"
                  height="25"
                  viewBox="0 0 17 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 0C3.8131 0 0 3.85087 0 8.5842C0 10.1834 0.438647 11.7441 1.26881 13.0982L8.01616 24.0791C8.14541 24.2895 8.37311 24.4173 8.61801 24.4173C8.6199 24.4173 8.62174 24.4173 8.62363 24.4173C8.87065 24.4153 9.09883 24.2836 9.22571 24.0695L15.8011 12.9822C16.5854 11.6568 17 10.136 17 8.5842C17 3.85087 13.1869 0 8.5 0ZM14.5853 12.2477L8.60729 22.3278L2.47289 12.3444C1.78188 11.2174 1.40722 9.91714 1.40722 8.5842C1.40722 4.63976 4.59425 1.42116 8.5 1.42116C12.4058 1.42116 15.5881 4.63976 15.5881 8.5842C15.5881 9.87761 15.2381 11.1446 14.5853 12.2477Z"
                    fill="black"
                  />
                  <path
                    d="M8.49647 3.61737C5.89259 3.61737 3.77417 5.64581 3.77417 8.13909C3.77417 10.6164 5.85812 12.6608 8.49647 12.6608C11.1673 12.6608 13.2188 10.5892 13.2188 8.13909C13.2188 5.64581 11.1003 3.61737 8.49647 3.61737ZM8.49647 11.1636C6.75147 11.1636 5.33777 9.80544 5.33777 8.13909C5.33777 6.47691 6.76055 5.11456 8.49647 5.11456C10.2324 5.11456 11.6499 6.47691 11.6499 8.13909C11.6499 9.78113 10.2691 11.1636 8.49647 11.1636Z"
                    fill="black"
                  />
                </svg>
                <span>Бориспіль</span>
              </a>
              <div className="actions-header__phones phones-header">
                <div className="phones-header__items">
                  <a href="tel:+380675561977" className="phones-header__phone">
                    067-556-19-77
                  </a>
                  <button type="button" className="phones-header__arrow">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.11323 9.2309L0.324654 2.00808C-0.107404 1.54862 -0.107404 0.803689 0.324655 0.344454C0.756329 -0.114819 1.45646 -0.114819 1.8881 0.344454L7.89495 6.73553L13.9016 0.34464C14.3334 -0.114632 15.0335 -0.114632 15.4652 0.34464C15.897 0.803913 15.897 1.54881 15.4652 2.00827L8.6765 9.23108C8.46056 9.46072 8.17784 9.57541 7.89498 9.57541C7.61199 9.57541 7.32906 9.4605 7.11323 9.2309Z"
                        fill="#E8AA31"
                      />
                    </svg>
                  </button>
                  <ul className="phones-header__list">
                    {phoneNumber.map((obj, index) => (
                      <li key={index}>
                        <a href={`tel:${obj.fullNumber}`} className="phones-header__phone">
                          {obj.shortNumber}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href="" className="actions-header__favorite">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.1004 0C17.7169 0 15.4856 1.07339 14 2.87184C12.5144 1.07333 10.2832 0 7.89957 0C3.54375 0 0 3.52462 0 7.85705C0 11.2495 2.03385 15.1734 6.04492 19.5198C9.13175 22.8646 12.4897 25.4544 13.4454 26.1685L13.9998 26.5828L14.5543 26.1686C15.5099 25.4545 18.868 22.8647 21.9549 19.52C25.9661 15.1736 28 11.2496 28 7.85705C28 3.52462 24.4562 0 20.1004 0ZM20.5948 18.2782C18.0558 21.0293 15.3242 23.2533 13.9998 24.2783C12.6755 23.2533 9.944 21.0293 7.40498 18.2781C3.76837 14.3375 1.84615 10.734 1.84615 7.85705C1.84615 4.53717 4.56172 1.83622 7.89957 1.83622C10.0961 1.83622 12.1243 3.02694 13.1927 4.94377L14 6.3923L14.8073 4.94377C15.8756 3.027 17.9038 1.83622 20.1004 1.83622C23.4383 1.83622 26.1538 4.53711 26.1538 7.85705C26.1538 10.7341 24.2316 14.3377 20.5948 18.2782Z"
                    fill="black"
                  />
                </svg>
              </a>
              <div className="actions-header__cart cart-header">
                <div className="cart-header__icon">
                  <svg
                    width="32"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.65214 2.24957H0V0.749573H4.65214C6.00406 0.749573 7.15546 1.73221 7.36796 3.06732L7.99688 7.01882H29.7121C30.8545 7.01882 31.6906 8.09558 31.4076 9.20234L29.5067 16.6364C29.0823 18.2963 27.5869 19.4574 25.8736 19.4574H9.9766L10.3874 22.0383C10.484 22.6452 11.0073 23.0918 11.6218 23.0918H28.203V24.5918H11.6218C10.2699 24.5918 9.11852 23.6092 8.90602 22.2741L5.8866 3.3031C5.79002 2.69623 5.26665 2.24957 4.65214 2.24957ZM9.73786 17.9574H25.8736C26.9016 17.9574 27.7988 17.2607 28.0535 16.2648L29.9543 8.83075C29.9948 8.67264 29.8753 8.51882 29.7121 8.51882H8.23562L9.73786 17.9574Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5695 31.8258C14.3183 31.8258 15.0189 31.1799 15.0189 30.2656C15.0189 29.3513 14.3183 28.7054 13.5695 28.7054C12.8207 28.7054 12.1201 29.3513 12.1201 30.2656C12.1201 31.1799 12.8207 31.8258 13.5695 31.8258ZM13.5695 33.3258C15.1984 33.3258 16.5189 31.9557 16.5189 30.2656C16.5189 28.5755 15.1984 27.2054 13.5695 27.2054C11.9406 27.2054 10.6201 28.5755 10.6201 30.2656C10.6201 31.9557 11.9406 33.3258 13.5695 33.3258Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.5466 31.8258C27.2954 31.8258 27.996 31.1799 27.996 30.2656C27.996 29.3513 27.2954 28.7054 26.5466 28.7054C25.7977 28.7054 25.0972 29.3513 25.0972 30.2656C25.0972 31.1799 25.7977 31.8258 26.5466 31.8258ZM26.5466 33.3258C28.1755 33.3258 29.496 31.9557 29.496 30.2656C29.496 28.5755 28.1755 27.2054 26.5466 27.2054C24.9177 27.2054 23.5972 28.5755 23.5972 30.2656C23.5972 31.9557 24.9177 33.3258 26.5466 33.3258Z"
                      fill="black"
                    />
                  </svg>

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
                {categories.map((obj) => (
                  <Catalog key={obj.id} {...obj} />
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
