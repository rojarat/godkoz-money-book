import React from "react";
import styled from "@emotion/styled";
export function Sidebar() {
  const LeftDiv = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    color: var(--light-slate);
  `;
  const RightDiv = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: 40px;
    z-index: 10;
    color: var(--light-slate);
    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: var(--light-slate);
    }
  `;

  const ColUl = styled.ul`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    &:after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: var(--light-slate);
    }
  `;
  const ColLi = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
  `;
  const ColA = styled.a`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    padding-top: 10;
    &:hover,
    :focus {
      transform: translateY(-3px);
      color: var(--green);
    }
  `;
  const ColSvg = styled.svg`
    width: 20px;
    height: 20px;
  `;
  const DivEmail = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
  `;
  const LinkA = styled.a`
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    :focus {
      transform: translateY(-3px);
      color: var(--green);
    }
  `;
  return (
    <>
      <LeftDiv>
        <ColUl>
          <ColLi>
            <ColA href="https://github.com/bchiang7" aria-label="GitHub">
              <ColSvg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </ColSvg>
            </ColA>
          </ColLi>
          <ColLi>
            <ColA
              href="https://www.instagram.com/bchiang7"
              aria-label="Instagram"
            >
              <ColSvg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </ColSvg>
            </ColA>
          </ColLi>
        </ColUl>
      </LeftDiv>
      <RightDiv>
        <DivEmail>
          <LinkA href="mailto:brittany.chiang@gmail.com">
            godkog@gmail.com
          </LinkA>
        </DivEmail>
      </RightDiv>
    </>
  );
}

export default Sidebar;
