import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Nav = styled.nav`
    width: 65%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavUL = styled.ul`
    list-style-type: none;
    margin-left: -30%;
`;

export const NavLI = styled.li`
    display: inline;
    padding: 0 20px;
    font-size: 25px;
    & > a {
        text-decoration: none;
        color: #fff
    }
`;

export const Logo = styled.img`
    max-width: 75px;
    max-height: 75px;
`;