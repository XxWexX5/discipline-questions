import styled from 'styled-components';

export const WrapperCategories = styled.div`
    align-items: center;
    background-color: #2E2E3D;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: 100vh;
    width: 100%;

    .row {
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        .col {
            margin: 35px 25px;
        }
    }

    .header {
        padding: 1.85em 0;
        text-align: center;
        width: 100%;

        .title {
            color: #FFFFFF;
            display: inline;
            font-size: 2.2rem;
            letter-spacing: .1em;
            position: relative;
            text-transform: uppercase;

            &:before,
            &:after {
                background-color: #FFFFFF;
                border-radius: 1em;
                content: '';
                height: 2px;
                left: 0;
                margin: auto;
                position: absolute;
                right: 0;
                width: 100%;
            }

            &:before {
                bottom: -.4em;
                max-width: 95px;
            }

            &:after {
                bottom: -.73em;
                max-width: 50px;
            }
        }
    }
`;