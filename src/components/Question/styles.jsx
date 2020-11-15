import styled, { css } from 'styled-components';

export const FeedbackQuestion = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    align-items: center;
    justify-content: center;
    padding: 2em;
    display: none;

    ${props => (props.theme === 'correct' || props.theme === 'wrong') && css`
        display: flex;
    `}

    .box {
        width: 100%;
        max-width: 500px;
        min-height: 400px;
        background-color: #FFFFFF;
        border-radius: 1.25em;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .main {
            .text {
                text-align: centter;
                ${
                    props => (props.theme === 'wrong') ? css`
                        color: #E8354D;
                    ` : css`
                        color: #4ECC58;
                    `
                }
                font-size: 28px;
            }

            .container-image {
                width: 6em;
                height: auto;
                margin: auto;
                margin-bottom: .65em;

                .image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }

        .footer {
            position: absolute;
            bottom: -3px;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;

            .btn-next {
                width: 100%;
                height: 50px;
                ${
                    props => (props.theme === 'wrong') ? css`
                        background-color: #E8354D;
                    ` : css`
                        background-color: #4ECC58;
                    `
                }
                color: #FFFFFF;
                font-weight: bold;
                font-size: 18px;
                text-transform: uppercase;
                border: 0;
                border-bottom-left-radius: 1.25em;
                border-bottom-right-radius: 1.25em;
                display: block;
                cursor: pointer;
                transition: .35s opacity ease-in-out;

                &:hover {
                    opacity: .9;
                }
            }
        }
    }
`;

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

                    &:hover {
                        opacity: 1;
                    }
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