import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import styled from "@emotion/styled";

const Nav = styled.nav`
  transition: all .1s;
  box-shadow: 0 1px 0 ${props => props.scrolled ? 'rgba(255,255,255,.35)' : 'transparent'};
`;

const InnerNav = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-content: center;
  height: 80px;
`

const NavWrap = styled.ul`
  display: flex;
  align-items: center;
`

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true, logo }) => {

  let headerClass = "fixed w-full z-30 top-0 text-white bg-black";
  console.log({logo})

  return (
    <Nav id="header" className={headerClass} scrolled={scrolled}>
      <InnerNav>
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" to="/">
            <svg
              className="h-8 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.005 512.005"
            >
              <rect
                fill="#2a2a31"
                x="16.539"
                y="425.626"
                width="479.767"
                height="50.502"
                transform="matrix(1,0,0,1,0,0)"
              />
              <path
                className="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>
          </Link>
        </div>

        {showNav && navMenuItems && (
            <NavWrap>
              {navMenuItems.map((i) => (
                <li className="mr-3">
                  <CTALink {...i} className="text-white" />
                </li>
              ))}
            </NavWrap>
        )}
      </InnerNav>
    </Nav>
  );
};

export default Header;
