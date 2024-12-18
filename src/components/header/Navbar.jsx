import React from "react";
import Styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Input } from "../reusable_styled/Reusable.Styled";
import {Link} from 'react-router-dom'
import {mobile} from '../../responsive'

const Wrapper = Styled.div`
    position:sticky;
    top:0;
    background:white;
    z-index:6;
    height:70px;
    display:flex;
    align-items: center;
    ${mobile({height:'50px'})};
`;
const Left = Styled.div`
flex:1;
${mobile({flex:2})};
`;
const Logo = Styled.h1`
  display: flex;
  justify-content: center;
  color: black;
  cursor:pointer;
`;

const Center = Styled.div`
display:flex;
flex:3;
${mobile({flex:4})};
`;
const SearchContainer = Styled.div`
    height:45px;
    width:90%;
    border:none;
    background:whitesmoke;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const NavInput = Styled(Input)`
    font-family:cursive;
    height:25px;
    width:80%;
    background:whitesmoke;
    color:grey;
  &:focus{
    font-size:15px;
    color:grey;
  }
`;
const SearchBtn = Styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    height:45px;
    background:orange;
    border:none;
    cursor:pointer;
    color:white;
`;
const Right = Styled.div`
display:flex;
justify-content:flex-end;
flex:2;
${mobile({flex:'1',justifyContent:'center'})}
`;
const MenuItemCont = Styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-right:60px;
${mobile({display:'none'})};
`;
const MenuItem = Styled.div`
    font-size:16px;
    cursor:pointer;
    margin-left:25px;
`;

const MenuItemShopCart = Styled(MenuItem)`
 ${mobile({display:'flex'})};
 margin:0;
 display:none;
`

function Navbar() {
  return (
    <Wrapper>
      <Left>
      <Link to="/" style={{textDecoration:'none',color:'black'}}>
        <Logo>E_SHOP</Logo>
        </Link>
      </Left>
      <Center>
        <SearchContainer>
          <NavInput placeholder="Search in E-Shop" />
        </SearchContainer>
        <SearchBtn>
          <SearchIcon />
        </SearchBtn>
      </Center>
      <Right>
     <MenuItemCont>
     <Link to="/register" style={{textDecoration:'none',color:'black'}}>
     <MenuItem>Register</MenuItem>
     </Link>
     <Link to="/login" style={{textDecoration:'none',color:'black'}}>
        <MenuItem>SignIn</MenuItem>
        </Link>
        <Link to="/cart" style={{textDecoration:'none',color:'black'}}>
        <MenuItem>
          <Badge badgeContent={2} color="warning">
            <ShoppingCartIcon style={{color:'black'}}/>
          </Badge>
        </MenuItem>
        </Link>
     </MenuItemCont>
     <Link to="/cart" style={{textDecoration:'none',color:'black'}}>
        <MenuItemShopCart>
          <Badge badgeContent={2} color="warning">
            <ShoppingCartIcon style={{color:'black'}}/>
          </Badge>
        </MenuItemShopCart>
        </Link>
      </Right>
    </Wrapper>
  );
}

export default Navbar;