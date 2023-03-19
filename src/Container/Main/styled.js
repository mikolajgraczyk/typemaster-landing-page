import styled from "styled-components";

export const StyledMain = styled.main`
    margin-top: 83px;

    @media(max-width: ${({theme}) => theme.breakpoint.tablet}px){
        margin-top: 62px;
    }

    @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
        margin-top: 64px;
    }
`;