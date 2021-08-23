import styled from 'styled-components';
import Link from 'next/link';
import { LogoBrand } from '../../atoms';
import { breakpoints } from '../../../utils';
import PropTypes from 'prop-types';

const Footer = ({ bgFooter }) => {
  return (
    <StyledFooter type={bgFooter}>
      <div className="container">
        <div className="content">
          <div className="about-company">
            <div className="logo">
              <LogoBrand />
            </div>
            <p className="text-regular about">
              Plan and book your perfect trip with expert advice, travel tips
              for vehicle information from us
            </p>
            <p className="text-regular">
              ©2020 Vehicle Rental Center. All rights reserved
            </p>
          </div>
          <div className="navigation-wrapper">
            <ul className="section">
              <li className="heading">Destinations</li>
              <li>
                <Link href="#">
                  <a className="text-regular">Bali</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Yogyakarta</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Jakarta</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Kalimantan</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Malang</a>
                </Link>
              </li>
            </ul>
            <ul className="section">
              <li className="heading">Vehicle</li>
              <li>
                <Link href="#">
                  <a className="text-regular">Bike</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Cars</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Motorbike</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Return Times</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">FAQs</a>
                </Link>
              </li>
            </ul>
            <ul className="section">
              <li className="heading">Interests</li>
              <li>
                <Link href="#">
                  <a className="text-regular">Adventure Travel</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Art And Culture</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Wildlife And Nature</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Family Holidays</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-regular">Culinary Trip</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="contact">
        <div className="content">
          <Link href="#">
            <a>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <g clipPath="url(#clip0)">
                  <path
                    d="M27.999 8.31499C27.0252 8.71252 26.0272 8.96974 25.0535 9.08666C26.1732 8.4553 26.9035 7.54333 27.3174 6.37414C26.295 6.93535 25.1995 7.33288 24.0554 7.54333C23.033 6.51444 21.7916 6 20.3066 6C18.8948 6 17.6776 6.49106 16.6796 7.44979C15.6815 8.40853 15.1703 9.57772 15.1703 10.934C15.1703 11.3081 15.219 11.6823 15.292 12.0564C13.1986 11.9629 11.2268 11.4484 9.4011 10.5365C7.57539 9.62449 6.01745 8.40853 4.72729 6.91197C4.26478 7.68363 4.02135 8.50206 4.02135 9.39065C4.02135 10.2325 4.21609 11.0275 4.62992 11.729C5.04374 12.4539 5.60363 13.0385 6.28522 13.4828C5.45757 13.4594 4.6786 13.249 3.97266 12.8514V12.9216C3.97266 14.1142 4.36215 15.1431 5.14111 16.055C5.92008 16.9436 6.89379 17.5282 8.08659 17.762C7.64842 17.879 7.18591 17.9257 6.74774 17.9257C6.45562 17.9257 6.13917 17.9023 5.77403 17.8556C6.09048 18.8377 6.69905 19.6561 7.57539 20.2875C8.45173 20.9189 9.44978 21.2462 10.5695 21.2696C8.7195 22.6726 6.57734 23.3742 4.21609 23.3742C3.75358 23.3742 3.33975 23.3508 2.97461 23.304C5.3602 24.7772 7.98922 25.5021 10.8373 25.5021C12.663 25.5021 14.367 25.2215 15.9736 24.6836C17.5803 24.1224 18.9435 23.3975 20.0632 22.4622C21.183 21.5268 22.181 20.4512 22.9843 19.2586C23.812 18.0426 24.4206 16.7799 24.8101 15.4704C25.1995 14.1609 25.4186 12.8281 25.4186 11.5186C25.4186 11.238 25.4186 11.0275 25.3943 10.8872C26.441 10.1623 27.293 9.3205 27.999 8.31499Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="25"
                      height="19.5021"
                      fill="white"
                      transform="translate(3 6)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          <Link href="#">
            <a>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <g clipPath="url(#clip0)">
                  <path
                    d="M17.6467 12.0309V10.1733C17.6467 9.89368 17.6667 9.67396 17.6866 9.53414C17.7066 9.37435 17.7665 9.23453 17.8663 9.09471C17.9661 8.95489 18.1058 8.85502 18.3054 8.7951C18.505 8.73517 18.7844 8.7152 19.1238 8.7152H20.98V5H18.006C16.2894 5 15.0719 5.39948 14.3333 6.21843C13.5948 7.03737 13.2156 8.21584 13.2156 9.81378V12.0309H11V15.7261H13.2156V26.4523H17.6467V15.7261H20.6008L21 12.0309H17.6467Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="10"
                      height="21.4523"
                      fill="white"
                      transform="translate(11 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          <Link href="#">
            <a>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <g clipPath="url(#clip0)">
                  <path
                    d="M20.9305 5H11.0695C7.71746 5 5 7.6498 5 10.9184V20.5339C5 23.8025 7.71746 26.4523 11.0695 26.4523H20.9305C24.2825 26.4523 27 23.8025 27 20.5339V10.9184C27 7.6498 24.2825 5 20.9305 5ZM25.0473 20.5339C25.0473 22.7553 23.1923 24.5482 20.9305 24.5482H11.0695C8.79142 24.5482 6.95266 22.7394 6.95266 20.5339V10.9184C6.95266 8.71289 8.80769 6.90405 11.0695 6.90405H20.9305C23.2086 6.90405 25.0473 8.71289 25.0473 10.9184V20.5339Z"
                    fill="#393939"
                  />
                  <path
                    d="M16.0003 10.2041C12.876 10.2041 10.3213 12.6794 10.3213 15.7258C10.3213 18.7723 12.8598 21.2635 16.0003 21.2635C19.1245 21.2635 21.6793 18.7882 21.6793 15.7258C21.6793 12.6794 19.1245 10.2041 16.0003 10.2041ZM16.0003 19.3594C13.95 19.3594 12.274 17.741 12.274 15.7417C12.2902 13.7266 13.95 12.1082 16.0003 12.1082C18.0506 12.1082 19.7266 13.7266 19.7266 15.7258C19.7266 17.7251 18.0506 19.3594 16.0003 19.3594Z"
                    fill="#393939"
                  />
                  <path
                    d="M21.9066 8.58594C21.5323 8.58594 21.158 8.72874 20.8977 8.99848C20.6373 9.25235 20.4746 9.6173 20.4746 9.98224C20.4746 10.3472 20.6211 10.7121 20.8977 10.966C21.158 11.2199 21.5323 11.3785 21.9066 11.3785C22.2808 11.3785 22.6551 11.2357 22.9154 10.966C23.1758 10.7121 23.3385 10.3472 23.3385 9.98224C23.3385 9.6173 23.1921 9.25235 22.9154 8.99848C22.6551 8.72874 22.2971 8.58594 21.9066 8.58594Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="22"
                      height="21.4523"
                      fill="white"
                      transform="translate(5 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          <Link href="#">
            <a>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <g clipPath="url(#clip0)">
                  <path
                    d="M9.21545 11.9712H4.27539V26.452H9.21545V11.9712Z"
                    fill="#393939"
                  />
                  <path
                    d="M25.4377 13.2941C24.4037 12.1957 23.0251 11.6353 21.3248 11.6353C20.7044 11.6353 20.13 11.7025 19.6015 11.8594C19.096 12.0163 18.6595 12.2181 18.2919 12.4871C17.9472 12.7561 17.6485 13.0026 17.4417 13.2492C17.2349 13.4734 17.0511 13.72 16.8673 14.0114V11.9491H11.9502L11.9732 12.644C11.9732 13.1147 11.9961 14.5494 11.9961 16.9703C11.9961 19.3913 11.9961 22.5295 11.9732 26.4299H16.8903V18.3601C16.8903 17.8669 16.9362 17.4635 17.0511 17.172C17.2579 16.6789 17.5796 16.253 17.9932 15.9167C18.4067 15.5805 18.9352 15.4236 19.5786 15.4236C20.4287 15.4236 21.0721 15.715 21.4627 16.2978C21.8763 16.8806 22.0601 17.6876 22.0601 18.6963V26.4299H26.9772V18.1359C27.0001 16.0064 26.4947 14.3924 25.4377 13.2941Z"
                    fill="#393939"
                  />
                  <path
                    d="M6.78022 5C5.95305 5 5.28671 5.24658 4.78122 5.71732C4.25275 6.18806 4 6.77088 4 7.4882C4 8.20551 4.25275 8.78833 4.75824 9.28149C5.26374 9.75223 5.90709 9.99881 6.73427 9.99881H6.75724C7.60739 9.99881 8.27373 9.75223 8.77922 9.28149C9.28472 8.81075 9.53746 8.20551 9.53746 7.4882C9.53746 6.77088 9.26174 6.16564 8.77922 5.6949C8.27373 5.24658 7.60739 5 6.78022 5Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="23"
                      height="21.4523"
                      fill="white"
                      transform="translate(4 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          <Link href="#">
            <a>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <g clipPath="url(#clip0)">
                  <path
                    d="M29.9856 13.4594C29.9856 12.9216 29.9376 12.2201 29.8417 11.3783C29.7698 10.5365 29.6499 9.78817 29.506 9.13343C29.3381 8.38515 28.9784 7.77717 28.4269 7.26272C27.8753 6.74828 27.2278 6.46768 26.4844 6.37414C24.1823 6.11692 20.6811 6 16.0048 6C11.3285 6 7.82734 6.11692 5.52518 6.37414C4.78177 6.46768 4.13429 6.74828 3.58273 7.26272C3.03118 7.77717 2.67146 8.38515 2.5036 9.13343C2.33573 9.78817 2.23981 10.5365 2.14388 11.3783C2.07194 12.2201 2.02398 12.9216 2 13.4594C2 14.0206 2 14.7689 2 15.751C2 16.7332 2 17.4814 2.02398 18.0426C2.02398 18.5805 2.07194 19.282 2.16787 20.1238C2.21583 20.9656 2.33573 21.7139 2.47962 22.3686C2.64748 23.1169 3.00719 23.7249 3.55875 24.2393C4.11031 24.7538 4.75779 25.0344 5.5012 25.1279C7.80336 25.3852 11.3046 25.5021 15.9808 25.5021C20.6571 25.5021 24.1583 25.3852 26.4604 25.1279C27.2038 25.0578 27.8513 24.7538 28.4029 24.2393C28.9544 23.7249 29.3141 23.1169 29.482 22.3686C29.6499 21.7139 29.7458 20.9656 29.8417 20.1238C29.9137 19.282 29.9616 18.5805 29.9856 18.0426C29.9856 17.5048 30.0096 16.7332 30.0096 15.751C30.0096 14.7689 30.0096 14.0206 29.9856 13.4594ZM21.5444 16.5695L13.5348 21.4567C13.3909 21.5502 13.223 21.6204 13.0072 21.6204C12.8393 21.6204 12.6954 21.5736 12.5276 21.5034C12.1918 21.3164 12 21.0358 12 20.6382V10.8872C12 10.4897 12.1679 10.2091 12.5276 10.022C12.8873 9.83494 13.223 9.85832 13.5348 10.0454L17.5396 12.489L21.5444 14.9326C21.8561 15.0963 22.024 15.3769 22.024 15.751C22 16.1252 21.8561 16.4058 21.5444 16.5695Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="28.0096"
                      height="19.5021"
                      fill="white"
                      transform="translate(2 6)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </StyledFooter>
  );
};
Footer.propTypes = {
  bgFooter: PropTypes.string,
};

Footer.defaultProps = {
  bgFooter: 'white',
};
export default Footer;

const StyledFooter = styled.div`
  margin-top: 80px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'white':
        return '#ffffff';
      case 'gray':
        return '#F9F9FB;';
      default:
        return '#ffffff';
    }
  }};

  padding-bottom: 5px;
  .container {
    padding-top: 70px;
    margin: 0 auto;
    width: 1500px;
    ${breakpoints.lessThan('2xl')`
      width: 95%;
      margin: 0 auto;       
    `}
    ${breakpoints.lessThan('xl')`
      width: 95%;
      margin: 0 auto;       
    `}
    ${breakpoints.lessThan('lg')`
      width: 95%;
      margin: 0 auto;       
    `}
    ${breakpoints.lessThan('md')`
      width: 100%;
      margin: 0 auto;        
      padding-left: 1rem;
      padding-right: 1rem;
    `}

    ${breakpoints.lessThan('sm')`
      width: 95%;
      margin: 0 auto;       
      padding-left: 1rem;
      padding-right: 1rem;
    `}
    ${breakpoints.lessThan('xsm')`
      width: 95%;
      margin: 0 auto;       
      padding-left: 1rem;
      padding-right: 1rem;
    `}
  }
  .content {
    display: flex;
    gap: 100px;

    ${breakpoints.lessThan('xl')`
      gap: 50px;
    `}
    ${breakpoints.lessThan('lg')`
      gap: 25px;
    `}
    ${breakpoints.lessThan('md')`
      flex-direction: column;
    `}
    .about-company {
      width: 450px;
      ${breakpoints.lessThan('lg')`
        width: 250px;
      `}
      ${breakpoints.lessThan('md')`
        width: 100%; 
      `} 
      .logo {
        margin-bottom: 30px;
        ${breakpoints.lessThan('md')`
          margin-bottom: 15px;
          text-align: center; 
        `}
      }
      .about {
        margin-bottom: 60px;
        ${breakpoints.lessThan('md')`
          margin-bottom: 30px; 
        `}
      }
      p {
        ${breakpoints.lessThan('md')`
          text-align: center; 
        `}
      }
    }
    .navigation-wrapper {
      /* background-color: blue; */
      flex: 1;
      display: flex;
      gap: 250px;
      ${breakpoints.lessThan('xl')`
        gap: 50px;
      `}
      ${breakpoints.lessThan('md')`
          justify-content: space-around; 
      `}
      ${breakpoints.lessThan('xsm')`
        gap: 15px;
      `}
      .section {
        padding: 0;
        li {
          list-style: none;
          margin-bottom: 1rem;
          a {
            text-decoration: none;
            font: inherit;
            &:hover {
              opacity: 0.5;
            }
          }
        }
        .heading {
          font-family: Mulish;
          font-style: normal;
          font-weight: bold;
          font-size: 19px;
          line-height: 60px;
          color: #393939;
        }
      }
    }
  }
  .divider {
    height: 2px;
    width: 100%;
    margin-top: 74px;
    margin-bottom: 30px;
    background-color: #c4c4c4;
  }
  .contact {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .content {
      width: max-content;
      display: flex;
      gap: 1rem;

      ${breakpoints.lessThan('md')`
          flex-direction: row; 
      `}
      a {
        &:hover {
          path {
            fill: #ffcd61;
          }
        }
      }
    }
  }
`;
