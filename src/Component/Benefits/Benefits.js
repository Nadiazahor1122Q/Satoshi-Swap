
export function Benefits (){
    return (
  <>
  <section className="benefits-section">
  <div className="container">
    <div className="heading">
      <h2>All the benefits of decentralization</h2>
    </div>
    <div className="row" style={{ marginBottom: 24 }}>
      <div className="block">
        <div className="title">No KYC</div>
        <div className="text-wrap">
          <p>
            Jump straight in, with no registration, verification or KYC/AML
            required!
          </p>
        </div>
      </div>
      <div className="block">
        <div className="title">Non-custodial</div>
        <div className="text-wrap">
          <p>
            You are 100% in control of your funds at all time and there is no
            trusted third party involved in the process. Your keys and your
            funds!
          </p>
        </div>
      </div>
      <div className="block">
        <div className="title">Decentralized governance</div>
        <div className="text-wrap">
          <p>
            Once the SatoshiSwap project reaches network maturity the DAO will
            direct all aspects of development and governance through a provably
            fair voting scheme
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="block" style={{ background: "#209ec7" }}>
        <div className="title">Decentralized price oracle system</div>
        <div className="text-wrap">
          <p>
            This is no reliance on external third parties for price data (e.g.
            no chainlink, no centralized nodes)
          </p>
        </div>
      </div>
      <div className="block" style={{ background: "#3d5fc1" }}>
        <div className="title">100% on-chain</div>
        <div className="text-wrap">
          <p>
            The entire margin trading system is deployed on unbreakable smart
            contracts with no centralized components
          </p>
        </div>
      </div>
      <div className="block" style={{ background: "#070e25" }}>
        <div className="title">Tokenized Composable Positions</div>
        <div className="text-wrap">
          <p>
            Margin positions are tokenized as composable NFT's enabling in the
            future more sophisticated financial instruments to be built on top
            of the protocol (DeFi lego bricks)
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<CommunityDriven></CommunityDriven>
<Frequently></Frequently>
<Footer></Footer>
  </>
    )
}
export function CommunityDriven (){
    return (
        <>
        <section className="join-section">
  <div className="ill left-ill" />
  <div className="ill right-ill" />
  <div className="wrap">
    <div className="heading">
      <h2>Join the SatoshiSwap community</h2>
      <p>
        Read all SatoshiSwap news, chat and stay up-to-date
        in&nbsp;community-driven social media channels
      </p>
    </div>
    <div className="btn-wrap">
      <a
        href="https://twitter.com/SatoshiStBets"
        className="btn btn--white_border"
      >
        <span>
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={20} cy={20} r={20} fill="white" />
            <path
              d="M28 15.0667C27.4 15.3334 26.8 15.5334 26.1333 15.6001C26.8 15.2001 27.3333 14.5334 27.6 13.8001C26.9333 14.2001 26.2667 14.4667 25.5333 14.6001C24.9333 13.9334 24.0667 13.5334 23.1333 13.5334C21.3333 13.5334 19.8667 15.0001 19.8667 16.8001C19.8667 17.0667 19.8667 17.3334 19.9333 17.5334C17.1333 17.4001 14.7333 16.0667 13.1333 14.0667C12.8 14.6001 12.6667 15.1334 12.6667 15.7334C12.6667 16.8667 13.2667 17.8667 14.1333 18.4667C13.6 18.4667 13.0667 18.3334 12.6667 18.0667C12.6667 18.0667 12.6667 18.0667 12.6667 18.1334C12.6667 19.7334 13.8 21.0667 15.2667 21.3334C15 21.4001 14.7333 21.4667 14.4 21.4667C14.2 21.4667 14 21.4667 13.8 21.4001C14.2 22.7334 15.4 23.6667 16.8667 23.6667C15.7333 24.5334 14.3333 25.0667 12.8 25.0667C12.5333 25.0667 12.2667 25.0667 12 25.0001C13.4667 25.9334 15.2 26.4667 17 26.4667C23.0667 26.4667 26.3333 21.4667 26.3333 17.1334C26.3333 17.0001 26.3333 16.8667 26.3333 16.7334C27 16.2667 27.5333 15.6667 28 15.0667Z"
              fill="#3D60C5"
            />
          </svg>
          Get Twitter updates
        </span>
      </a>
      <a
        href="https://discord.gg/SatoshiStreetBets"
        className="btn btn--white_border"
      >
        <span>
          {/* <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={20} cy={20} r={20} fill="white" />
            <g clipPath="url(#clip0_412_11)">
              <path
                d="M18.2186 18.7121C17.9964 18.7313 17.7895 18.8332 17.6387 18.9976C17.4879 19.162 17.4043 19.377 17.4043 19.6001C17.4043 19.8231 17.4879 20.0381 17.6387 20.2025C17.7895 20.3669 17.9964 20.4688 18.2186 20.4881C18.3305 20.4834 18.4404 20.4568 18.542 20.4096C18.6437 20.3625 18.735 20.2957 18.8108 20.2133C18.8866 20.1308 18.9453 20.0342 18.9837 19.9289C19.0222 19.8237 19.0394 19.712 19.0346 19.6001C19.0401 19.488 19.0232 19.376 18.985 19.2705C18.9469 19.165 18.8881 19.0681 18.8122 18.9855C18.7363 18.9029 18.6447 18.8362 18.5428 18.7893C18.4409 18.7423 18.3307 18.7161 18.2186 18.7121ZM21.1386 18.7121C20.9598 18.6969 20.7805 18.7361 20.6242 18.8245C20.468 18.9129 20.3421 19.0464 20.2631 19.2076C20.184 19.3687 20.1554 19.55 20.1811 19.7277C20.2068 19.9053 20.2855 20.0711 20.407 20.2033C20.5284 20.3355 20.687 20.4279 20.8618 20.4685C21.0367 20.509 21.2197 20.4959 21.387 20.4307C21.5542 20.3655 21.6979 20.2513 21.7992 20.1031C21.9005 19.9549 21.9546 19.7796 21.9546 19.6001C21.9594 19.4881 21.9422 19.3764 21.9037 19.2712C21.8653 19.1659 21.8066 19.0693 21.7308 18.9868C21.655 18.9044 21.5637 18.8376 21.462 18.7905C21.3604 18.7433 21.2505 18.7167 21.1386 18.7121Z"
                fill="#3D60C5"
              />
              <path
                d="M25.0266 12H14.3066C14.0907 12.0005 13.8771 12.0436 13.6778 12.1267C13.4785 12.2098 13.2976 12.3313 13.1453 12.4843C12.993 12.6374 12.8724 12.8189 12.7902 13.0186C12.7081 13.2182 12.6661 13.4321 12.6666 13.648V24.4667C12.6661 24.6826 12.7081 24.8964 12.7902 25.0961C12.8724 25.2958 12.993 25.4773 13.1453 25.6303C13.2976 25.7834 13.4785 25.9049 13.6778 25.988C13.8771 26.0711 14.0907 26.1141 14.3066 26.1147H23.3786L22.9546 24.6347L23.9786 25.5867L24.9466 26.48L26.6666 28V13.648C26.6672 13.4321 26.6252 13.2182 26.543 13.0186C26.4609 12.8189 26.3402 12.6374 26.1879 12.4843C26.0357 12.3313 25.8547 12.2098 25.6555 12.1267C25.4562 12.0436 25.2425 12.0005 25.0266 12V12ZM21.9386 22.448C21.9386 22.448 21.6506 22.104 21.4106 21.8C21.9905 21.6634 22.5034 21.3262 22.8586 20.848C22.5708 21.0396 22.2621 21.1979 21.9386 21.32C21.5665 21.4788 21.1772 21.5943 20.7786 21.664C20.0935 21.7901 19.3908 21.7874 18.7066 21.656C18.3059 21.5773 17.9131 21.4621 17.5333 21.312C17.2125 21.1895 16.9066 21.0311 16.6213 20.84C16.9637 21.3082 17.4589 21.6422 18.0213 21.784C17.7813 22.088 17.488 22.4507 17.488 22.4507C17.0128 22.4634 16.5417 22.3592 16.1162 22.1472C15.6907 21.9351 15.3239 21.6218 15.048 21.2347C15.0735 19.6119 15.4675 18.0162 16.2 16.568C16.8442 16.062 17.6297 15.7685 18.448 15.728L18.528 15.824C17.7563 16.0139 17.0361 16.3717 16.4186 16.872C16.4186 16.872 16.5946 16.776 16.8906 16.64C17.4655 16.3766 18.0784 16.2056 18.7066 16.1333C18.7505 16.1242 18.7951 16.1189 18.84 16.1173C19.3761 16.0475 19.9186 16.0421 20.456 16.1013C21.3021 16.1983 22.1211 16.4602 22.8666 16.872C22.282 16.3961 21.6031 16.0498 20.8746 15.856L20.9866 15.728C21.8049 15.7685 22.5903 16.062 23.2346 16.568C23.9671 18.0162 24.3611 19.6119 24.3866 21.2347C24.1082 21.6209 23.7397 21.9334 23.3131 22.1448C22.8864 22.3563 22.4146 22.4604 21.9386 22.448Z"
                fill="#3D60C5"
              />
            </g>
            <defs>
              <clipPath id="clip0_412_11">
                <rect
                  width={16}
                  height={16}
                  fill="white"
                  transform="translate(12 12)"
                />
              </clipPath>
            </defs>
          </svg> */}
     
           <img id="png" src="/static/ang-removebg-preview.png" 
           alt="" style={{width:50,}}
          />
            Chat on Discord
        </span> 

      </a>
      <a
        href="https://t.me/SatoshiSwapAnnouncements"
        className="btn btn--white_border"
      >
        <span>
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={20} cy={20} r={20} fill="white" />
            <path
              d="M29.6645 12.3358C29.6488 12.2641 29.6144 12.1979 29.5649 12.1438C29.5153 12.0897 29.4523 12.0497 29.3823 12.0277C29.1274 11.9772 28.8635 11.9959 28.6182 12.0819C28.6182 12.0819 11.6141 18.1941 10.643 18.8709C10.4343 19.0165 10.364 19.1014 10.3292 19.2008C10.161 19.686 10.6842 19.8946 10.6842 19.8946L15.0668 21.3226C15.1409 21.3359 15.2171 21.3315 15.2892 21.3097C16.2854 20.6798 25.3159 14.9751 25.8407 14.7834C25.9215 14.7592 25.9838 14.7834 25.9676 14.8441C25.759 15.5759 17.9552 22.508 17.9123 22.5501C17.8914 22.5672 17.8752 22.5892 17.865 22.6142C17.8548 22.6392 17.8511 22.6664 17.8541 22.6932L17.4449 26.9723C17.4449 26.9723 17.2735 28.3041 18.6053 26.9723C19.5497 26.0271 20.4562 25.2443 20.909 24.8635C22.4162 25.9042 24.0375 27.0548 24.7369 27.6572C24.8546 27.7711 24.994 27.8601 25.1468 27.9189C25.2996 27.9776 25.4627 28.005 25.6264 27.9993C25.8279 27.9747 26.0171 27.8894 26.169 27.7546C26.3208 27.6198 26.4279 27.442 26.4762 27.2448C26.4762 27.2448 29.5732 14.7737 29.6767 13.1032C29.6872 12.9415 29.7009 12.8347 29.7025 12.7223C29.7076 12.5924 29.6948 12.4623 29.6645 12.3358Z"
              fill="#3D60C5"
            />
          </svg>
          Join the Telegram
        </span>
      </a>
    </div>
  </div>
</section>

        </>
    )
}
export function Frequently (){
    return (
        <>
        <section className="faq-section" id="faq">
  <div className="illustration" />
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="heading">
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div className="col">
        <div className="accordion activated">
          <div className="tab active">
            <div className="top">
              <div className="title">
                How much funds have been spent so far on developing SatoshiSwap?
                <div className="icon" />
              </div>
            </div>
            <div className="text" style={{ display: "block" }}>
              <p>
                On audits and code reviews alone, more than $100,000 has been
                spent from our personal funds, of which we will reveal the
                receipts for in due course. That doesn't speak anything of the
                cost of skilled smart contract labour or the thousands of hours
                we've personally put into the project. A lot of these costs
                arise due to SatoshiSwap being a novel protocol which isn't a
                fork of an existing, audited project. We hope our personal
                investment and the amount of time we've dedicated underlines our
                commitment to making SatoshiSwap an unwavering success.
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                How do I take part in the presale?
                <div className="icon" />
              </div>
            </div>
            <div className="text" style={{ display: "none" }}>
              <p>
                You need to be whitelisted on the
                <a href="https://whitelist.SatoshiSwap.net">
                  Whitelist Dashboard
                </a>
                to take part. We've put documentation that will answer all of
                your questions about the presale
                <a href="https://satoshistreetbets.gitbook.io/satoshiswap/presale/presale-overview">
                  here
                </a>
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                Why is there a whitelist program to take part?
                <div className="icon" />
              </div>
            </div>
            <div className="text" style={{ display: "none" }}>
              <p>
                We take compliance with regulations seriously to ensure this is
                a multi-year project that won't be shut down or subject to
                overly harsh penalties. We need to be doubly cautious with our
                approach as SatoshiStreetBets already has the spotlight shone
                brightly on it and by extension SatoshiSwap isn't a random,
                small project that can operate below-the-radar. Even with
                SatoshiSwap being a clear utility token with autonomous
                governance features baked-in, the SEC has made it clear they
                will pursue the founders of projects that are seen to have
                raised funds in a way that breaks their legal minefield of
                rules. Therefore we have a KYC and AML program as part of the
                whitelist process and will be unable to whitelist potential
                participants from "high-risk" countries.
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                What can you tell us about the SecondToken?
                <div className="icon" />
              </div>
            </div>
            <div className="text">
              <p>
                The SecondToken is a meme token, backed by SatoshiStreetBets. To
                prevent copycats stealing our original name, artwork and ideas
                we will be keeping the precise details of it a secret until
                after the presale.
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                Can I take part if I can't get whitelisted?
                <div className="icon" />
              </div>
            </div>
            <div className="text" style={{ display: "none" }}>
              <p>
                Yes, you will be able to take part via the PancakeSwap and
                Uniswap listings in January.
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                Will you still be distributing SatoshiSwap to Reddit members?
                <div className="icon" />
              </div>
            </div>
            <div className="text" style={{ display: "none" }}>
              <p>
                Yes. We are reviewing the most economically efficient way to
                conduct this, in consideration of fees. A separate article will
                be released about this in the weeks ahead.
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                Is leverage for the margin dex capped at 10x?
                <div className="icon" />
              </div>
            </div>
            <div className="text" style={{ display: "none" }}>
              <p>
                No, the amount of leverage available to traders is proportional
                to the amount of funds lenders have deposited into the vaults.
                We'll start with sensible low leverage defaults and gradually
                increase them over time - demand willing.
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                What connection does this project have to SatoshiStreetBets?
                <div className="icon" />
              </div>
            </div>
            <div className="text">
              <p>
                The founder of SatoshiStreetBets David Gilbert is leading this
                project. He is in charge of the SatoshiStreetBets Twitter,
                Telegram, Reddit, Discord, SatoshiStreetBets.com and will ensure
                SatoshiSwap and SecondToken are deeply integrated into these
                communities. We are aware there are fake SSB communities that
                have stolen our name and have addressed this here.
              </p>
            </div>
          </div>
          <div className="tab none">
            <div className="top">
              <div className="title">
                Are team tokens vested?
                <div className="icon" />
              </div>
            </div>
            <div className="text">
              <p>
                Yes. Some more precise details about aspects of the tokenomics
                such as these will be documented later in December before the
                presale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export function Footer (){
  return(
      <>
      <footer className="primary-footer">
  <div className="container">
    <div className="subscribe-form">
      <div className="heading">
        <h2>Sign Up for our Newsletter</h2>
        <p>Stay updated on the latest SatoshiSwap news</p>
      </div>
      <form id="subscribe-form">
        <div className="form-group">
          <input
            id="email-subscribe"
            type="email"
            placeholder="Enter your Email"
          />
          <button id="subscribe" type="submit" className="btn btn--primary">
            <span>Subscribe</span>
          </button>
        </div>
      </form>
    </div>
    <div className="bottom-footer">
      <div className="row">
        <div className="left-side">
          <div className="logo">
            <a href="./">
              <img src="static/logo-w.svg" alt="SatoshiSwap" />
            </a>
          </div>
          <div className="copyrights">
            Copyright © Diamond Hands Consulting Ltd 2021.
            <br />
            All rights reserved.
          </div>
        </div>
        <div className="right-side">
          <div className="navigation">
            <div className="heading">Legal</div>
            <nav>
              <div>
                <a href="https://satoshistreetbets.gitbook.io/satoshiswap/presale/terms-and-conditions">
                  Terms &amp; Conditions
                </a>
              </div>
            </nav>
          </div>
          <div className="socials">
            <div className="heading">Socials</div>
            <nav>
              <div>
                <a href="https://t.me/SatoshiSwapAnnouncements">
                  <div className="icon">
                    <svg
                      width={17}
                      height={14}
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3755 0.681142C16.3625 0.622065 16.3342 0.567463 16.2933 0.522863C16.2525 0.478263 16.2006 0.445247 16.1429 0.427158C15.9326 0.385528 15.7151 0.40095 15.5129 0.471822C15.5129 0.471822 1.49445 5.51083 0.693838 6.0688C0.521849 6.18879 0.463853 6.25879 0.435188 6.34078C0.29653 6.74076 0.727836 6.91274 0.727836 6.91274L4.34094 8.09C4.40203 8.10096 4.46485 8.09731 4.52426 8.07934C5.34554 7.56004 12.7904 2.857 13.223 2.69901C13.2897 2.67901 13.341 2.69901 13.3277 2.74901C13.1557 3.3523 6.72212 9.06727 6.68679 9.10194C6.66958 9.11604 6.65617 9.13422 6.64779 9.15483C6.6394 9.17544 6.63631 9.19782 6.63879 9.21993L6.30148 12.7477C6.30148 12.7477 6.16016 13.8456 7.25809 12.7477C8.0367 11.9684 8.78399 11.3231 9.1573 11.0091C10.3999 11.8671 11.7365 12.8157 12.3131 13.3123C12.4101 13.4062 12.525 13.4796 12.651 13.528C12.777 13.5765 12.9115 13.599 13.0464 13.5943C13.2125 13.5741 13.3685 13.5037 13.4937 13.3926C13.6189 13.2815 13.7072 13.1349 13.747 12.9724C13.747 12.9724 16.3002 2.69101 16.3855 1.31377C16.3942 1.18044 16.4055 1.09245 16.4068 0.999788C16.411 0.892641 16.4004 0.785429 16.3755 0.681142Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span>Telegram</span>
                </a>
              </div>
              <div>
                <a href="https://reddit.com/r/SatoshiStreetBets">
                  <div className="icon">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_179:589)">
                        <path
                          d="M16.4087 7.8666C16.4087 6.79993 15.542 5.93327 14.4754 5.93327C14.0087 5.93327 13.6087 6.0666 13.2754 6.33327C12.0754 5.59993 10.6087 5.13327 9.00869 5.0666L9.80869 2.4666L12.0754 2.99993C12.142 3.79993 12.8087 4.4666 13.6754 4.4666C14.542 4.4666 15.2754 3.73327 15.2754 2.8666C15.2754 1.99993 14.542 1.2666 13.6754 1.2666C13.0754 1.2666 12.542 1.59993 12.2754 2.13327L9.60869 1.53327C9.40869 1.4666 9.14202 1.59993 9.07536 1.79993L8.07536 5.0666C6.40869 5.13327 4.74202 5.53327 3.54202 6.33327C3.20869 6.0666 2.80869 5.93327 2.34202 5.93327C1.27536 5.93327 0.408691 6.79993 0.408691 7.8666C0.408691 8.53327 0.742025 9.13327 1.20869 9.4666C1.20869 9.59993 1.20869 9.79993 1.20869 9.93327C1.20869 11.2666 2.00869 12.4666 3.40869 13.3999C4.74202 14.2666 6.54203 14.7333 8.40869 14.7333C10.2754 14.7333 12.0754 14.2666 13.4087 13.3999C14.8087 12.4666 15.6087 11.2666 15.6087 9.93327C15.6087 9.79993 15.6087 9.6666 15.6087 9.53327C16.0754 9.13327 16.4087 8.53327 16.4087 7.8666ZM13.742 2.13327C14.142 2.13327 14.4754 2.4666 14.4754 2.8666C14.4754 3.2666 14.142 3.59993 13.742 3.59993C13.342 3.59993 13.0087 3.2666 13.0087 2.8666C13.0087 2.4666 13.342 2.13327 13.742 2.13327ZM4.94203 9.0666C4.94203 8.4666 5.47536 7.99993 6.00869 7.99993C6.60869 7.99993 7.07536 8.53327 7.07536 9.0666C7.07536 9.59993 6.60869 10.1333 6.00869 10.1333C5.47536 10.1333 4.94203 9.6666 4.94203 9.0666ZM11.0754 12.1999C10.542 12.7333 9.67536 12.9999 8.47536 12.9999C7.27536 12.9999 6.40869 12.7333 5.87536 12.1999C5.67536 11.9999 5.67536 11.7333 5.87536 11.5999C6.07536 11.3999 6.34203 11.3999 6.47536 11.5999C6.87536 11.9999 7.54203 12.1999 8.47536 12.1999C9.40869 12.1999 10.0754 11.9999 10.4754 11.5999C10.6754 11.3999 10.942 11.3999 11.0754 11.5999C11.2087 11.7999 11.2087 12.0666 11.0754 12.1999ZM10.8087 10.1333C10.2087 10.1333 9.67536 9.6666 9.67536 9.0666C9.67536 8.4666 10.2087 7.99993 10.8087 7.99993C11.4087 7.99993 11.8754 8.53327 11.8754 9.0666C11.8754 9.59993 11.4087 10.1333 10.8087 10.1333Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_179:589">
                          <rect
                            width={16}
                            height={16}
                            fill="white"
                            transform="translate(0.408691)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span>Reddit</span>
                </a>
              </div>
              <div>
                <a href="https://discord.gg/SatoshiStreetBets">
                  <div className="icon">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_179:568)">
                        <path
                          d="M6.62658 6.71193C6.40435 6.7312 6.19742 6.8331 6.04666 6.99751C5.89589 7.16191 5.81226 7.37687 5.81226 7.59993C5.81226 7.82299 5.89589 8.03795 6.04666 8.20235C6.19742 8.36676 6.40435 8.46866 6.62658 8.48793C6.73849 8.4833 6.8484 8.45665 6.95001 8.4095C7.05162 8.36235 7.14293 8.29562 7.21872 8.21314C7.29451 8.13066 7.35329 8.03405 7.39171 7.92883C7.43012 7.8236 7.4474 7.71184 7.44258 7.59993C7.44803 7.48787 7.43118 7.37585 7.393 7.27036C7.35482 7.16486 7.29607 7.068 7.22016 6.98539C7.14425 6.90279 7.05269 6.83607 6.95079 6.78913C6.8489 6.74219 6.73869 6.71595 6.62658 6.71193ZM9.54658 6.71193C9.36771 6.69676 9.18843 6.73595 9.03221 6.82437C8.87599 6.91278 8.7501 7.04631 8.67103 7.20747C8.59196 7.36862 8.5634 7.5499 8.58907 7.72756C8.61475 7.90523 8.69347 8.071 8.81493 8.20317C8.93639 8.33535 9.09493 8.42777 9.26979 8.46834C9.44465 8.50892 9.62769 8.49574 9.79495 8.43055C9.9622 8.36536 10.1059 8.25119 10.2072 8.10298C10.3084 7.95477 10.3626 7.77944 10.3626 7.59993C10.3674 7.48802 10.3501 7.37626 10.3117 7.27103C10.2733 7.16581 10.2145 7.0692 10.1387 6.98672C10.0629 6.90424 9.97161 6.83751 9.87001 6.79036C9.7684 6.74321 9.65849 6.71656 9.54658 6.71193Z"
                          fill="white"
                        />
                        <path
                          d="M13.4345 0H2.71447C2.49857 0.000524649 2.2849 0.0435677 2.08564 0.126671C1.88638 0.209775 1.70544 0.331312 1.55315 0.484343C1.40087 0.637375 1.28021 0.818903 1.19808 1.01856C1.11594 1.21822 1.07394 1.43211 1.07447 1.648V12.4667C1.07394 12.6826 1.11594 12.8964 1.19808 13.0961C1.28021 13.2958 1.40087 13.4773 1.55315 13.6303C1.70544 13.7834 1.88638 13.9049 2.08564 13.988C2.2849 14.0711 2.49857 14.1141 2.71447 14.1147H11.7865L11.3625 12.6347L12.3865 13.5867L13.3545 14.48L15.0745 16V1.648C15.075 1.43211 15.033 1.21822 14.9509 1.01856C14.8687 0.818903 14.7481 0.637375 14.5958 0.484343C14.4435 0.331312 14.2626 0.209775 14.0633 0.126671C13.864 0.0435677 13.6504 0.000524649 13.4345 0V0ZM10.3465 10.448C10.3465 10.448 10.0585 10.104 9.81847 9.8C10.3983 9.66344 10.9112 9.32623 11.2665 8.848C10.9786 9.03957 10.67 9.19792 10.3465 9.32C9.9743 9.47885 9.58507 9.59428 9.18647 9.664C8.50131 9.79015 7.79863 9.78744 7.11447 9.656C6.71371 9.57725 6.32097 9.46211 5.94113 9.312C5.62035 9.18948 5.31441 9.03114 5.02913 8.84C5.37149 9.30824 5.86669 9.64215 6.42913 9.784C6.18913 10.088 5.8958 10.4507 5.8958 10.4507C5.42059 10.4634 4.94952 10.3592 4.52404 10.1472C4.09857 9.93514 3.73173 9.62178 3.4558 9.23467C3.48137 7.61193 3.87529 6.01622 4.6078 4.568C5.25208 4.06199 6.03757 3.76848 6.8558 3.728L6.9358 3.824C6.16414 4.01387 5.4439 4.37172 4.82647 4.872C4.82647 4.872 5.00247 4.776 5.29847 4.64C5.87336 4.37659 6.48624 4.2056 7.11447 4.13333C7.15838 4.12422 7.20298 4.11886 7.2478 4.11733C7.7839 4.04748 8.32643 4.04211 8.8638 4.10133C9.70997 4.19834 10.5289 4.46015 11.2745 4.872C10.6899 4.39614 10.0109 4.04983 9.28247 3.856L9.39447 3.728C10.2127 3.76848 10.9982 4.06199 11.6425 4.568C12.375 6.01622 12.7689 7.61193 12.7945 9.23467C12.5161 9.62094 12.1475 9.93339 11.7209 10.1448C11.2943 10.3563 10.8225 10.4604 10.3465 10.448Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_179:568">
                          <rect
                            width={16}
                            height={16}
                            fill="white"
                            transform="translate(0.407715)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span>Discord</span>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/SatoshiStBets">
                  <div className="icon">
                    <svg
                      width={17}
                      height={14}
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4087 2.06654C15.8087 2.3332 15.2087 2.5332 14.542 2.59987C15.2087 2.19987 15.742 1.5332 16.0087 0.79987C15.342 1.19987 14.6754 1.46654 13.942 1.59987C13.342 0.933203 12.4754 0.533203 11.542 0.533203C9.74203 0.533203 8.27536 1.99987 8.27536 3.79987C8.27536 4.06654 8.27536 4.3332 8.34202 4.5332C5.54202 4.39987 3.14202 3.06654 1.54202 1.06654C1.20869 1.59987 1.07536 2.1332 1.07536 2.7332C1.07536 3.86654 1.67536 4.86654 2.54202 5.46654C2.00869 5.46654 1.47536 5.3332 1.07536 5.06654C1.07536 5.06654 1.07536 5.06654 1.07536 5.1332C1.07536 6.7332 2.20869 8.06654 3.67536 8.3332C3.40869 8.39987 3.14202 8.46654 2.80869 8.46654C2.60869 8.46654 2.40869 8.46654 2.20869 8.39987C2.60869 9.7332 3.80869 10.6665 5.27536 10.6665C4.14202 11.5332 2.74202 12.0665 1.20869 12.0665C0.942025 12.0665 0.675358 12.0665 0.408691 11.9999C1.87536 12.9332 3.60869 13.4665 5.40869 13.4665C11.4754 13.4665 14.742 8.46654 14.742 4.1332C14.742 3.99987 14.742 3.86654 14.742 3.7332C15.4087 3.26654 15.942 2.66654 16.4087 2.06654Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span>Twitter</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

      </>
  )
}