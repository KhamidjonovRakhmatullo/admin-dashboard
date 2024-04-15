import styled from "styled-components";

export const NavbarContainer =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #006DAB;
padding: 0px 50px;
height: 72px;

`

export const Logo = styled.h1`
color: ${(props)=> props.$blueColor ? `#006DAB` : `white`};
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding: ${(props) => props.$padding ? `13px 0px 13px 20px` : ``};
@media only screen and (max-width: 750px){
  display: ${(props)=> props.$displayNone ? `none`: `flex`};
}
`

export const NavLeftBox= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const NavRightBox= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const SearchWrapper= styled.div`
display: flex;
@media only screen and (max-width: 750px){
  display: none;
}
`