/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderTop = () => {
  const menuList = [' Про нас', 'Акції', 'Оплата та доставка', 'Контакти'];
  return (
    <div className="header__top top-header">
      <div className="top-header__container">
        <div className="top-header__menu menu">
          <nav className="menu__body">
            <div className="menu__list">
              {menuList.map((name, index) => (
                <li key={index} className="menu__item">
                  <Link to="" className="menu__link">
                    {name}
                  </Link>
                </li>
              ))}
            </div>
          </nav>
        </div>
        <Link to="" className="top-header__user">
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
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
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
        </Link>
        <button type="button" className="icon-menu">
          <span></span>
        </button>
      </div>
    </div>
  );
};
