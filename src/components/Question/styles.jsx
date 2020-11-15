import styled from 'styled-components';

export const WrapperQuestion = styled.div`
    margin: 1.35em 0;
    padding: 0 1.35em;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.15em;

        .text-question {
            font-weight: bold;
            font-size: 18px;
            color: ${ props => props.color };
        }
    }

    .main {
        > .text {
            font-size: 16px;
            color: #555555;
            font-weight: bold;
            margin-bottom: 1.2em;
        }

        .wrapper-input + .wrapper-input {
            margin-top: .8em;
        }

        .form {
            display: block;
            margin-top: 1em;

            input[type='radio'] {
                opacity: 0;
                visibility: hidden;
                width: 0;
                height: 0;
                position: absolute;
            }

            .alternative {
                width: 100%;
                background-color: #FFFFFF;
                border: 2px solid ${ props => props.color };
                padding: 1.35em 1.1em;
                display: block;
                border-radius: 1.05em;
                color: ${ props => props.color };
                font-weight: bold;
                cursor: pointer;
                transition: .15s opacity ease-in-out;

                &:hover {
                    opacity: .7;
                }

                &.actived {
                    background-color: ${ props => props.color };
                    color: #FFFFFF;
                }
            }

            .btn-send {
                display: block;
                width: 100%;
                border: 2px solid ${ props => props.color };
                padding: .85em 0;
                margin: 1.35em 0;
                background-color: ${ props => props.color };
                color: #FFFFFF;
                font-weight: bold;
                font-size: 16px;
                border-radius: 2em;
                cursor: pointer;

                &:hover {
                    background-color: #FFFFFF;
                    color: ${ props => props.color };
                }
            }
        }
    }
`;