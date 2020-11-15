import styled from 'styled-components';

export const WrapperHeaderQuestion = styled.header`
    background-color: ${ props => props.color };
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;

    .container-image-home {
        width: 2.2em;
        height: 2.2em;
        transition: .35s opacity ease-in-out;

        &:hover {
            opacity: .65;
        }

        .image {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`;