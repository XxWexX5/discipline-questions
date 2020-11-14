import styled from 'styled-components';

export const WrapperModuleSubject = styled.div`
    background-color: #2878CD;
    min-width: 17em;
    min-height: 15em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    cursor: pointer;
    transition: .35s box-shadow ease-in-out;
    position: relative;

    &:hover {
        box-shadow: 5px 5px 45px rgb(40, 120, 205, .35);
    }

    .main {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .image {
            max-width: 120px;
            width: 100%;
            margin: 0 auto;
        }
    }

    .footer {
        background-color: #2878CD;
        border-radius: 2em;
        bottom: -12px;
        box-shadow: 0 0 3px rgba(0, 0, 0, .35);
        left: 0;
        margin: auto;
        max-width: 205px;
        padding: .35em 0;
        position: absolute;
        right: 0;
        text-align: center;
        width: 100%;

        .title-module {
            color: #FFFFFF;
            font-size: 18px;
            text-transform: uppercase;
        }
    }
`;