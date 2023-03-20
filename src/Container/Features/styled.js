import styled from "styled-components";

const bpTablet = ({theme}) => theme.breakpoint.tablet;
const bpMobile = ({theme}) => theme.breakpoint.mobile;

export const StyledFeatures = styled.section`
    margin-top: 168px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 30px;

    @media(max-width: ${bpTablet}px){
        margin-top: 142px;
        grid-template-columns: auto auto;
        row-gap: 72px;
        column-gap: 69px;
    }

    @media(max-width: ${bpMobile}px){
        margin-top: 111px;
        grid-template-columns: auto;
        gap: 64px;
    }
`;