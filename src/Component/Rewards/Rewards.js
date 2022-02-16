export function Rewards() {
    return (
        <div>

            <section className="rewards-section" id="rewards">
                <div className="container">
                    <div className="heading">
                        <h2>A masterpiece in DeFi rewards and passive income</h2>
                        <p>
                            The SatoshiSwap ecosystem is designed from the ground up to reward
                            participants
                        </p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mobile-select">
                                <select className="js-tabs-mobile" name="tabs">
                                    <option value="earn">Earn Interest</option>
                                    <option value="yield">Yield Farming</option>
                                    <option value="staking">Staking</option>
                                    <option value="trading">Trading Fees</option>
                                    <option value="liquidations">Liquidations</option>
                                    <option value="diamond">Diamond Hands</option>
                                    <option value="community">Community participation</option>
                                    <option value="vault">Vault Fees</option>
                                    <option value="burn">Leveraged Burn</option>
                                </select>
                                <div className="text-wrap">
                                    <p>Securely deposit in our audited vaults and earn interest</p>
                                </div>
                            </div>
                            <div className="accordion activated">
                                <div className="tab active" data-image="earn">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/earn.svg" />
                                        </div>
                                        <div className="title">Earn Interest</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Securely deposit in our audited vaults and passively earn
                                            interest
                                        </p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="yield">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/yield.svg" />
                                        </div>
                                        <div className="title">Yield Farming</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Farm yield by providing liquidity to the SatoshiSwap DEX
                                        </p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="staking">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/staking.svg" />
                                        </div>
                                        <div className="title">Staking</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Lock up your tokens in the HODL bar and receive staking
                                            rewards
                                        </p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="trading">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/trading.svg" />
                                        </div>
                                        <div className="title">Trading Fees</div>
                                    </div>
                                    <div className="text">
                                        <p>A percentage of each trade is shared with token holders</p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="liquidations">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/liquidations.svg" />
                                        </div>
                                        <div className="title">Liquidation Fees</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            All liquidated trades that occur on the SatoshiSwap margin
                                            dex are shared with token holders
                                        </p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="diamond">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/diamond.svg" />
                                        </div>
                                        <div className="title">Diamond Hands</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            A temporary token that tracks those who HODL and deserves
                                            maximum rewards. Tradeable and composable in it's own right.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="community">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/community.svg" />
                                        </div>
                                        <div className="title">Community participation</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            SatoshiSwap is distributed to community members in
                                            proportion to the upvotes their content receives
                                        </p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="vault">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/vault.svg" />
                                        </div>
                                        <div className="title">Vault Fees</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            A percentage of fees from the vaults are shared with token
                                            holders
                                        </p>
                                    </div>
                                </div>
                                <div className="tab none" data-image="burn">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="static/rewards/burn.svg" />
                                        </div>
                                        <div className="title">Leveraged Burn</div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            SatoshiSwap by design burns tokens in proportion to how much
                                            activity occurs on the margin dex. With leveraged trades
                                            occuring, this means burns will occur in proportion to the
                                            amount of leverage e.g. x10.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="illustration">
                                <img
                                    src="static/rewards-ill.png"
                                    className="active"
                                    data-title="earn"
                                />
                                <img
                                    src="static/benefits/yield.svg"
                                    className="none"
                                    data-title="yield"
                                />
                                <img
                                    src="static/benefits/staking.svg"
                                    className="none"
                                    data-title="staking"
                                />
                                <img
                                    src="static/benefits/trading-fees.svg"
                                    className="none"
                                    data-title="trading"
                                />
                                <img
                                    src="static/benefits/liquidations.svg"
                                    className="none"
                                    data-title="liquidations"
                                />
                                <img
                                    src="static/benefits/diamond-hands.png"
                                    className="none"
                                    data-title="diamond"
                                />
                                <img
                                    src="static/benefits/community.svg"
                                    className="none"
                                    data-title="community"
                                />
                                <img src="static/vault.png" className="none" data-title="vault" />
                                <img src="static/burn.png" className="none" data-title="burn" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PancakeSwap></PancakeSwap>
            <Community></Community>
            <HODL></HODL>

        </div>
    )
}
export function PancakeSwap() {
    return (
        <section className="dex-section">
            <div className="illustration" />
            <div className="container">
                <div className="heading">
                    <h2>The SatoshiSwap DEX</h2>
                    <p>
                        On the SatoshiSwap DEX you can make margin trades as easily and
                        quickly as a regular swap on PancakeSwap or UniSwap. It runs on
                        Binance Smart Chain.
                    </p>
                </div>
                <div className="row">
                    <div className="block">
                        <div className="icon">
                            <img src="static/dex-1.png" />
                        </div>
                        <h3>Margin Trading</h3>
                        <p>
                            Easy leveraged trades. Open long or short positions with up to 10x
                            leverage
                        </p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <img src="static/dex-2.png" />
                        </div>
                        <h3>Swapping</h3>
                        <p>
                            We make leveraged trading as simple as doing a PancakeSwap trade
                        </p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <img src="static/dex-3.png" />
                        </div>
                        <h3>Lending</h3>
                        <p>
                            Deposit into the decentralized vault and lend out your tokens to
                            earn interest
                        </p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <img src="static/dex-4.png" />
                        </div>
                        <h3>Liquidity providing</h3>
                        <p>Provide liquidity and earn rewards</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export function Community() {
    return (
        <>
           <section className="rewards-how-section" id="how">
  <div className="container">
    <div className="community-rewards-wrap">
      <div className="row">
        <div className="col">
          <div className="illustration">
            <img
              src="/static/community_rewards-ill.png"
              alt="Community Rewards"
            />
          </div>
        </div>
        <div className="col">
          <h2 className="heading">Community Rewards</h2>
          <div className="text-wrap">
            <p>
              To bootstrap adoption of SatoshiSwap and reward community members
              for their contributions to the SSB ecosystem, SatoshiSwap will be
              continously distributed to members of the
              <b>SatoshiStreetBets subreddit</b> and
              <b>SatoshiStreetBets.com platform</b>
              <i>(under development)</i>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="how-it-works-wrap">
      <div className="row">
        <div className="col">
          <div className="heading">
            <h2>How it works</h2>
          </div>
          <div className="swiper-pagination-custom swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active">
              01
            </span>
            <span className="swiper-pagination-bullet">02</span>
            <span className="swiper-pagination-bullet">03</span>
          </div>
          <div className="swiper how-it-works-swiper swiper-initialized swiper-horizontal swiper-pointer-events">
            <div
              className="swiper-wrapper"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(0px, 0px, 0px)"
              }}
            >
              <div
                className="swiper-slide swiper-slide-visible swiper-slide-active"
                style={{ width: 496 }}
              >
                <div className="text-wrap">
                  <p>
                    On the SatoshiSwap DEX you can make margin trades as easily
                    as a regular swap on PancakeSwap or UniSwap. It runs on
                    Binance Smart Chain and is built using trusted, well-known
                    DeFi primitives such as the Automated Market Maker and
                    classic lending protocols.
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                style={{ width: 496 }}
              >
                <div className="text-wrap">
                  <p>
                    When the margin trader chooses to close their position the
                    smart contracts automatically calculate their profit or loss
                    and then allows them to withdraw the approriate amount of
                    profit from the vault.
                  </p>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: 496 }}>
                <div className="text-wrap">
                  <p>
                    There is a decentralized liquidation system in place to
                    handle margin positions which become too unprofitable and a
                    decentralized insurance fund to protect vault deposits
                    against sudden extreme market movements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-nav">
            <div className="nav nav--left swiper-button-disabled">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12H2"
                  stroke="#414A66"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                />
                <path
                  d="M9 19L2 12L9 5"
                  stroke="#414A66"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <div className="nav nav--right">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12H22"
                  stroke="#070E24"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                />
                <path
                  d="M15 5L22 12L15 19"
                  stroke="#070E24"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="illustration">
            <img src="/static/how-it-works_ill.png" alt="How it works" />
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <a
          href="https://satoshistreetbets.gitbook.io/satoshiswap/technicals/protocol-overiew"
          className="btn btn--blue_border"
        >
          <span>Read More</span>
        </a>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
  export function HODL () {
      return (
          <>
      <section className="hodl-section">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="illustration">
          <img src="/static/hodl-ill.png" alt="HODL Bar" />
        </div>
      </div>
      <div className="col">
        <div className="heading">
          <h2>HODL Bar</h2>
        </div>
        <div className="text-wrap">
          <p>
            Welcome to the coolest bar in crypto. Kick bar, relax and HODL your
            SatoshiSwap tokens.
          </p>
          <p>
            In return for parking your precious SatoshiSwap tokens in the HODL
            bar you'll receive an allocation of "Diamond Hands", a temporary
            token which proves you're HODL-ing and deserve a proportion of the
            rewards and fees flowing through the ecosystem.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
      )
  }