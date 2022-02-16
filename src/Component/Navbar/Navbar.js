import React, { useState } from "react";


export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div>
      <header className="primary-header" className={colorChange ? 'primary-header colorChange' : 'primary-header'} id="primary-header-is-scrolled">
        <div className="container container-wide">
          <div className="row">
            <div className="logo">
              <a href="/">
                <img src="../static/logo.svg" alt="SatoshiSwap" />
              </a>
            </div>
            <div className="flex-right">
              <nav>
                <a href="#rewards">Rewards</a>
                <a href="#presale">Presale Timeline</a>
                <a href="#roadmap">Roadmap</a>
                <a href="https://satoshistreetbets.gitbook.io/satoshiswap/">
                  Documentation
                </a>
              </nav>
              <div className="btn-wrap">
                <a
                  href="https://whitelist.satoshiswap.net/"
                  className="btn btn--blue_border click_presale"
                >
                  <span className>Join Presale</span>
                </a>
              </div>
              <div className="menu-burger">
                <svg
                  className="close"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7 4.3C19.3 3.9 18.7 3.9 18.3 4.3L12 10.6L5.7 4.3C5.3 3.9 4.7 3.9 4.3 4.3C3.9 4.7 3.9 5.3 4.3 5.7L10.6 12L4.3 18.3C3.9 18.7 3.9 19.3 4.3 19.7C4.5 19.9 4.7 20 5 20C5.3 20 5.5 19.9 5.7 19.7L12 13.4L18.3 19.7C18.5 19.9 18.8 20 19 20C19.2 20 19.5 19.9 19.7 19.7C20.1 19.3 20.1 18.7 19.7 18.3L13.4 12L19.7 5.7C20.1 5.3 20.1 4.7 19.7 4.3Z"
                    fill="#070E24"
                  />
                </svg>
                <svg
                  className="open"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12H23"
                    stroke="#070E24"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 5H23"
                    stroke="#070E24"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 19H23"
                    stroke="#070E24"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-header hidden">
          <div className="container">
            <nav>
              <a
                href="https://whitelist.satoshiswap.net/"
                className="click_presale"
              >
                Join Presale
              </a>
              <a href="#rewards">Rewards</a>
              <a href="#roadmap">Roadmap</a>
              <a href="#faq">FAQ</a>
            </nav>
            <div className="btn-wrap">
              <a
                href="https://satoshistreetbets.gitbook.io/satoshiswap/"
                className="btn btn--blue_border"
              >
                <span>Documentation</span>
              </a>
            </div>
          </div>
          <div className="illustration" />
        </div>
      </header>
      <Decentralized></Decentralized>
      <SatoshiStreetBets></SatoshiStreetBets>
      <Presale></Presale>
    </div>
  )
};
export function Decentralized() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="main-hero-title-animation">
              Decentralized margin trading protocol
            </h1>
            <div className="text-wrap" id="main-hero-title-animation">
              <p>
                Easily trade your favorite BSC tokens with up to
                <br />
                <b>10x leverage</b> and earn
                <b>multiple DeFi revenue streams</b>
              </p>
              <p>
                Trade, lend, borrow, earn and more, in a growing suite of DeFi
                products
              </p>
            </div>
            <div className="btn-wrap" id="secondary-hero-title-animation">
              <a
                href="https://whitelist.SatoshiSwap.net"
                className="btn btn--primary click_presale"
              >
                <span className>Join The Presale</span>
              </a>
              <a
                href="https://whitelist.SatoshiSwap.net"
                id="Top"
                className
                style={{
                  background: "none",
                  color: "black",
                  paddingLeft: 0,
                  // paddingRight: 0,
                  // boxSizing: "border-box",
                  // display: "inline-block",
                  // borderRadius: 100,
                  // fontWeight: 600,
                  // fontSize: 16,
                  // lineHeight: 24,
                  // overflow: "hidden",
                  // position: "relative"
                }}

              >
                <span style={{ fontSize: 16, fontWeight: 600 }}>
                  Presale starts
                  <span style={{
                    color: "#3d60c5",
                    marginTop: "-1px"

                  }}>January 20th 6PM UTC</span>
                </span>
              </a>
            </div>
          </div>
          <div className="illustration">
            <img src="../static/hero-ill2.png" />
          </div>
        </div>
      </div>
      <div className="mobile-illustration">
        <img src="static/hero-ill2.png" />
      </div>
    </section>
  )
}

export function SatoshiStreetBets() {
  return (
    <section className="socials-section">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <h2>
              The official cryptocurrency of <span>SatoshiStreetBets</span>
            </h2>
            <p>A community of 750,000 crypto traders with diamond hands 💎🙌</p>
          </div>
          <div className="socials">
            <a href="https://reddit.com/r/SatoshiStreetBets" className="social">
              <div className="icon">
                <svg
                  width={65}
                  height={64}

                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx="32.856"
                    cy={32}
                    r={32}
                    fill="#EC632B"
                  />
                  <g clipPath="url(#clip0_179:74)">
                    <path
                      d="M44.856 31.7999C44.856 30.1999 43.556 28.8999 41.956 28.8999C41.256 28.8999 40.656 29.0999 40.156 29.4999C38.356 28.3999 36.156 27.6999 33.756 27.5999L34.956 23.6999L38.356 24.4999C38.456 25.6999 39.456 26.6999 40.756 26.6999C42.056 26.6999 43.156 25.5999 43.156 24.2999C43.156 22.9999 42.056 21.8999 40.756 21.8999C39.856 21.8999 39.056 22.3999 38.656 23.1999L34.656 22.2999C34.356 22.1999 33.956 22.3999 33.856 22.6999L32.356 27.5999C29.856 27.6999 27.356 28.2999 25.556 29.4999C25.056 29.0999 24.456 28.8999 23.756 28.8999C22.156 28.8999 20.856 30.1999 20.856 31.7999C20.856 32.7999 21.356 33.6999 22.056 34.1999C22.056 34.3999 22.056 34.6999 22.056 34.8999C22.056 36.8999 23.256 38.6999 25.356 40.0999C27.356 41.3999 30.056 42.0999 32.856 42.0999C35.656 42.0999 38.356 41.3999 40.356 40.0999C42.456 38.6999 43.656 36.8999 43.656 34.8999C43.656 34.6999 43.656 34.4999 43.656 34.2999C44.356 33.6999 44.856 32.7999 44.856 31.7999ZM40.856 23.1999C41.456 23.1999 41.956 23.6999 41.956 24.2999C41.956 24.8999 41.456 25.3999 40.856 25.3999C40.256 25.3999 39.756 24.8999 39.756 24.2999C39.756 23.6999 40.256 23.1999 40.856 23.1999ZM27.656 33.5999C27.656 32.6999 28.456 31.9999 29.256 31.9999C30.156 31.9999 30.856 32.7999 30.856 33.5999C30.856 34.3999 30.156 35.1999 29.256 35.1999C28.456 35.1999 27.656 34.4999 27.656 33.5999ZM36.856 38.2999C36.056 39.0999 34.756 39.4999 32.956 39.4999C31.156 39.4999 29.856 39.0999 29.056 38.2999C28.756 37.9999 28.756 37.5999 29.056 37.3999C29.356 37.0999 29.756 37.0999 29.956 37.3999C30.556 37.9999 31.556 38.2999 32.956 38.2999C34.356 38.2999 35.356 37.9999 35.956 37.3999C36.256 37.0999 36.656 37.0999 36.856 37.3999C37.056 37.6999 37.056 38.0999 36.856 38.2999ZM36.456 35.1999C35.556 35.1999 34.756 34.4999 34.756 33.5999C34.756 32.6999 35.556 31.9999 36.456 31.9999C37.356 31.9999 38.056 32.7999 38.056 33.5999C38.056 34.3999 37.356 35.1999 36.456 35.1999Z"
                      fill="#EC632B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_179:74">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(20.856 20)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="count">
                510k
                <span id="svg">
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.56367 5.28071L2.57228 0.280712C2.38401 0.0985538 2.13184 -0.00224062 1.87009 3.78026e-05C1.60835 0.00231622 1.35797 0.107485 1.17288 0.292893C0.987791 0.478301 0.882803 0.729114 0.880529 0.991311C0.878254 1.25351 0.978875 1.50611 1.16072 1.69471L5.44633 5.98771L1.16072 10.2807C1.06537 10.373 0.989323 10.4833 0.937004 10.6053C0.884685 10.7273 0.857147 10.8585 0.855995 10.9913C0.854843 11.1241 0.880101 11.2558 0.930295 11.3787C0.98049 11.5016 1.05461 11.6132 1.14835 11.7071C1.24208 11.801 1.35354 11.8753 1.47622 11.9255C1.59891 11.9758 1.73036 12.0011 1.86291 12C1.99546 11.9988 2.12645 11.9712 2.24825 11.9188C2.37004 11.8664 2.4802 11.7902 2.57228 11.6947L7.56367 6.69471C7.75082 6.50718 7.85596 6.25288 7.85596 5.98771C7.85596 5.72255 7.75082 5.46824 7.56367 5.28071Z"
                      fill="#AAB2CA"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a href="https://twitter.com/SatoshiStBets" className="social">
              <div className="icon">
                <svg
                  width={65}
                  height={64}
                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx="32.856"
                    cy={32}
                    r={32}
                    fill="#1DA1F2"
                  />
                  <g clipPath="url(#clip0_179:79)">
                    <path
                      d="M44.856 24.5998C43.956 24.9998 43.056 25.2998 42.056 25.3998C43.056 24.7998 43.856 23.7998 44.256 22.6998C43.256 23.2998 42.256 23.6998 41.156 23.8998C40.256 22.8998 38.956 22.2998 37.556 22.2998C34.856 22.2998 32.656 24.4998 32.656 27.1998C32.656 27.5998 32.656 27.9998 32.756 28.2998C28.556 28.0998 24.956 26.0998 22.556 23.0998C22.056 23.8998 21.856 24.6998 21.856 25.5998C21.856 27.2998 22.756 28.7998 24.056 29.6998C23.256 29.6998 22.456 29.4998 21.856 29.0998C21.856 29.0998 21.856 29.0998 21.856 29.1998C21.856 31.5998 23.556 33.5998 25.756 33.9998C25.356 34.0998 24.956 34.1998 24.456 34.1998C24.156 34.1998 23.856 34.1998 23.556 34.0998C24.156 36.0998 25.956 37.4998 28.156 37.4998C26.456 38.7998 24.356 39.5998 22.056 39.5998C21.656 39.5998 21.256 39.5998 20.856 39.4998C23.056 40.8998 25.656 41.6998 28.356 41.6998C37.456 41.6998 42.356 34.1998 42.356 27.6998C42.356 27.4998 42.356 27.2998 42.356 27.0998C43.356 26.3998 44.156 25.4998 44.856 24.5998Z"
                      fill="#1DA1F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_179:79">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(20.856 20)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="count">
                67k
                <span id="svg">
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.56367 5.28071L2.57228 0.280712C2.38401 0.0985538 2.13184 -0.00224062 1.87009 3.78026e-05C1.60835 0.00231622 1.35797 0.107485 1.17288 0.292893C0.987791 0.478301 0.882803 0.729114 0.880529 0.991311C0.878254 1.25351 0.978875 1.50611 1.16072 1.69471L5.44633 5.98771L1.16072 10.2807C1.06537 10.373 0.989323 10.4833 0.937004 10.6053C0.884685 10.7273 0.857147 10.8585 0.855995 10.9913C0.854843 11.1241 0.880101 11.2558 0.930295 11.3787C0.98049 11.5016 1.05461 11.6132 1.14835 11.7071C1.24208 11.801 1.35354 11.8753 1.47622 11.9255C1.59891 11.9758 1.73036 12.0011 1.86291 12C1.99546 11.9988 2.12645 11.9712 2.24825 11.9188C2.37004 11.8664 2.4802 11.7902 2.57228 11.6947L7.56367 6.69471C7.75082 6.50718 7.85596 6.25288 7.85596 5.98771C7.85596 5.72255 7.75082 5.46824 7.56367 5.28071Z"
                      fill="#AAB2CA"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a href="https://t.me/satoshistreetbetsoriginal" className="social">
              <div className="icon">
                <svg
                  width={65}
                  height={64}
                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx="32.856"
                    cy={32}
                    r={32}
                    fill="#3B86C7"
                  />
                  <path
                    d="M44.8082 22.4198C44.7887 22.3302 44.7462 22.2474 44.6849 22.1798C44.6236 22.1121 44.5458 22.0621 44.4592 22.0347C44.1439 21.9715 43.8176 21.9949 43.5142 22.1024C43.5142 22.1024 22.4852 29.7427 21.2842 30.5887C21.0262 30.7706 20.9392 30.8767 20.8962 31.0011C20.6882 31.6075 21.3352 31.8683 21.3352 31.8683L26.7552 33.6533C26.8468 33.6699 26.9411 33.6644 27.0302 33.6371C28.2622 32.8497 39.4302 25.7189 40.0792 25.4793C40.1792 25.449 40.2562 25.4793 40.2362 25.5551C39.9782 26.4699 30.3272 35.135 30.2742 35.1876C30.2484 35.209 30.2283 35.2366 30.2157 35.2678C30.2031 35.299 30.1985 35.333 30.2022 35.3665L29.6962 40.7154C29.6962 40.7154 29.4842 42.3801 31.1312 40.7154C32.2992 39.5338 33.4202 38.5554 33.9802 38.0794C35.8442 39.3802 37.8492 40.8185 38.7142 41.5715C38.8597 41.7139 39.0321 41.8251 39.2211 41.8986C39.4101 41.972 39.6118 42.0062 39.8142 41.9991C40.0634 41.9684 40.2975 41.8617 40.4852 41.6932C40.6729 41.5248 40.8055 41.3025 40.8652 41.056C40.8652 41.056 44.6952 25.4672 44.8232 23.379C44.8362 23.1768 44.8532 23.0434 44.8552 22.9029C44.8614 22.7404 44.8456 22.5779 44.8082 22.4198Z"
                    fill="#3B86C7"
                  />
                </svg>
              </div>
              <div className="count">
                128k
                <span id="svg">
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.56367 5.28071L2.57228 0.280712C2.38401 0.0985538 2.13184 -0.00224062 1.87009 3.78026e-05C1.60835 0.00231622 1.35797 0.107485 1.17288 0.292893C0.987791 0.478301 0.882803 0.729114 0.880529 0.991311C0.878254 1.25351 0.978875 1.50611 1.16072 1.69471L5.44633 5.98771L1.16072 10.2807C1.06537 10.373 0.989323 10.4833 0.937004 10.6053C0.884685 10.7273 0.857147 10.8585 0.855995 10.9913C0.854843 11.1241 0.880101 11.2558 0.930295 11.3787C0.98049 11.5016 1.05461 11.6132 1.14835 11.7071C1.24208 11.801 1.35354 11.8753 1.47622 11.9255C1.59891 11.9758 1.73036 12.0011 1.86291 12C1.99546 11.9988 2.12645 11.9712 2.24825 11.9188C2.37004 11.8664 2.4802 11.7902 2.57228 11.6947L7.56367 6.69471C7.75082 6.50718 7.85596 6.25288 7.85596 5.98771C7.85596 5.72255 7.75082 5.46824 7.56367 5.28071Z"
                      fill="#AAB2CA"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a href="https://discord.gg/SatoshiStreetBets" className="social">
              <div className="icon">
                <svg
                  width={65}
                  height={64}
                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx="32.856"
                    cy={32}
                    r={32}
                    fill="#7789D4"
                  />
                  <g clipPath="url(#clip0_179:68)">
                    <path
                      d="M30.1839 30.0678C29.8505 30.0967 29.5401 30.2495 29.314 30.4961C29.0879 30.7427 28.9624 31.0652 28.9624 31.3998C28.9624 31.7344 29.0879 32.0568 29.314 32.3034C29.5401 32.55 29.8505 32.7029 30.1839 32.7318C30.3518 32.7248 30.5166 32.6849 30.669 32.6141C30.8214 32.5434 30.9584 32.4433 31.0721 32.3196C31.1858 32.1959 31.274 32.051 31.3316 31.8931C31.3892 31.7353 31.4151 31.5676 31.4079 31.3998C31.4161 31.2317 31.3908 31.0637 31.3335 30.9054C31.2762 30.7472 31.1881 30.6019 31.0743 30.478C30.9604 30.3541 30.8231 30.254 30.6702 30.1836C30.5174 30.1132 30.3521 30.0738 30.1839 30.0678ZM34.5639 30.0678C34.2956 30.045 34.0267 30.1038 33.7923 30.2364C33.558 30.3691 33.3692 30.5693 33.2506 30.8111C33.132 31.0528 33.0891 31.3247 33.1276 31.5912C33.1661 31.8577 33.2842 32.1064 33.4664 32.3046C33.6486 32.5029 33.8864 32.6415 34.1487 32.7024C34.411 32.7633 34.6856 32.7435 34.9364 32.6457C35.1873 32.5479 35.4028 32.3767 35.5547 32.1543C35.7067 31.932 35.7879 31.669 35.7879 31.3998C35.7951 31.2319 35.7692 31.0643 35.7116 30.9064C35.654 30.7486 35.5658 30.6037 35.4521 30.48C35.3384 30.3562 35.2014 30.2561 35.049 30.1854C34.8966 30.1147 34.7318 30.0747 34.5639 30.0678Z"
                      fill="#7789D4"
                    />
                    <path
                      d="M40.396 20H24.316C23.9921 20.0008 23.6716 20.0654 23.3727 20.19C23.0738 20.3147 22.8024 20.497 22.574 20.7265C22.3456 20.9561 22.1646 21.2284 22.0414 21.5278C21.9182 21.8273 21.8552 22.1482 21.856 22.472V38.7C21.8552 39.0238 21.9182 39.3447 22.0414 39.6442C22.1646 39.9436 22.3456 40.2159 22.574 40.4455C22.8024 40.675 23.0738 40.8573 23.3727 40.982C23.6716 41.1066 23.9921 41.1712 24.316 41.172H37.924L37.288 38.952L38.824 40.38L40.276 41.72L42.856 44V22.472C42.8568 22.1482 42.7937 21.8273 42.6705 21.5278C42.5473 21.2284 42.3664 20.9561 42.1379 20.7265C41.9095 20.497 41.6381 20.3147 41.3392 20.19C41.0403 20.0654 40.7198 20.0008 40.396 20V20ZM35.764 35.672C35.764 35.672 35.332 35.156 34.972 34.7C35.8418 34.4952 36.6111 33.9893 37.144 33.272C36.7122 33.5594 36.2492 33.7969 35.764 33.98C35.2057 34.2183 34.6219 34.3914 34.024 34.496C32.9962 34.6852 31.9422 34.6812 30.916 34.484C30.3148 34.3659 29.7257 34.1932 29.156 33.968C28.6748 33.7842 28.2159 33.5467 27.788 33.26C28.3015 33.9624 29.0443 34.4632 29.888 34.676C29.528 35.132 29.088 35.676 29.088 35.676C28.3751 35.6952 27.6685 35.5388 27.0303 35.2208C26.3921 34.9027 25.8419 34.4327 25.428 33.852C25.4663 31.4179 26.0572 29.0243 27.156 26.852C28.1224 26.093 29.3006 25.6527 30.528 25.592L30.648 25.736C29.4905 26.0208 28.4101 26.5576 27.484 27.308C27.484 27.308 27.748 27.164 28.192 26.96C29.0543 26.5649 29.9736 26.3084 30.916 26.2C30.9818 26.1863 31.0487 26.1783 31.116 26.176C31.9201 26.0712 32.7339 26.0632 33.54 26.152C34.8092 26.2975 36.0377 26.6902 37.156 27.308C36.2791 26.5942 35.2606 26.0747 34.168 25.784L34.336 25.592C35.5633 25.6527 36.7415 26.093 37.708 26.852C38.8067 29.0243 39.3976 31.4179 39.436 33.852C39.0183 34.4314 38.4656 34.9001 37.8256 35.2173C37.1857 35.5344 36.478 35.6905 35.764 35.672Z"
                      fill="#7789D4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_179:68">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(20.856 20)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="count">
                40k
                <span id="svg">
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.56367 5.28071L2.57228 0.280712C2.38401 0.0985538 2.13184 -0.00224062 1.87009 3.78026e-05C1.60835 0.00231622 1.35797 0.107485 1.17288 0.292893C0.987791 0.478301 0.882803 0.729114 0.880529 0.991311C0.878254 1.25351 0.978875 1.50611 1.16072 1.69471L5.44633 5.98771L1.16072 10.2807C1.06537 10.373 0.989323 10.4833 0.937004 10.6053C0.884685 10.7273 0.857147 10.8585 0.855995 10.9913C0.854843 11.1241 0.880101 11.2558 0.930295 11.3787C0.98049 11.5016 1.05461 11.6132 1.14835 11.7071C1.24208 11.801 1.35354 11.8753 1.47622 11.9255C1.59891 11.9758 1.73036 12.0011 1.86291 12C1.99546 11.9988 2.12645 11.9712 2.24825 11.9188C2.37004 11.8664 2.4802 11.7902 2.57228 11.6947L7.56367 6.69471C7.75082 6.50718 7.85596 6.25288 7.85596 5.98771C7.85596 5.72255 7.75082 5.46824 7.56367 5.28071Z"
                      fill="#AAB2CA"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};
export function Presale() {
  return (
    <section className="presale-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="illustration">
              <img src="static/presale-ill.png" />
            </div>
          </div>
          <div className="col">
            <div className="heading">
              <h2>
                <span>1</span> Presale <span>2</span> Tokens
              </h2>
              <p>
                Distributed in amounts chosen by presale participants. More
                information about SecondToken and it's real name will be
                released closer to the presale.
              </p>
            </div>
            <div className="blocks">
              <div className="block">
                <div className="heading">SatoshiSwap</div>
                <p>BSC token. Serious DeFi project.</p>
              </div>
              <div className="block">
                <div className="heading">SecondToken</div>
                <p>
                  ETH token. Absolutely not meant to be taken seriously. This is
                  a pure YOLO move and is just for fun. Yes it's a meme token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}
