import React, {useState} from "react";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./Navbar.elements";
import { FaBattleNet, FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaGlasses, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MenuItemLinkCart } from "./CartWidget";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);


    return(
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: {fontSize: "2em"}}}>
                <LogoContainer>
                    <FaBattleNet />
                    <p>
                        PC
                    </p>
                    <p>
                        COMPONENTES
                    </p>
                </LogoContainer>
                    <MobileIcon onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                        {
                            showMobileMenu ? <FaTimes /> : <FaBars />
                        }
                    </MobileIcon>

                <Menu open = {showMobileMenu}>
                    <MenuItem>
                            <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaHome />
                                    HOME
                                </div>
                            </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                            <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaUserAlt />
                                    SOBRE NOSOTROS
                                </div>
                            </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                            <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>  
                                <div>
                                    <FaBriefcase />
                                    CATÁLOGO 
                                </div>
                            </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                            <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaGlasses />
                                    CONTACTANOS
                                </div>
                            </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                            <MenuItemLinkCart onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaShoppingCart />
                                </div>
                            </MenuItemLinkCart>
                    </MenuItem>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Navbar;