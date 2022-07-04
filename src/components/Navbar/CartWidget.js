import styled from "styled-components";

export const MenuItemLinkCart = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem;
color: #64b2ff;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;

&:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;

    div{
        svg{
            fill: #23394d;
        }
    }
}

div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

svg{
    fill: #e0792a;
    margin-right: 0.5rem;
}

@media screen and (max-width: 960px){
    width: 100%;

    div{
        width: 30%;
        justify-content: left;

        svg{
            display: flex;
        }
    }

}

@media screen and (max-width: 880px){

    div{
        width: 40%;
        justify-content: left;

        svg{
            display: flex;
        }
    }

}

@media screen and (max-width: 500px){

    div{
        width: 60%;
        justify-content: left;

        svg{
            display: flex;
        }
    }

}

@media screen and (max-width: 260px){

    div{
        width: 100%;
        justify-content: left;

        svg{
            display: flex;
        }
    }

}
`;

export const Carrito =styled.div`


`;








