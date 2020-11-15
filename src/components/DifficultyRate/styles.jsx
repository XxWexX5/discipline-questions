import styled, { css } from 'styled-components';

export const WrapperDifficultyRate = styled.div`
    width: 5em;
    text-align: center;

    ${props => (props.difficult === 'easy') && css`
        .container-image {
            svg {
                #star-01 {
                    * {
                        opacity: 1;
                        fill: #3586D3;
                    }
                }
            }
        }
    `}

    ${props => (props.difficult === 'normal') && css`
        .container-image {
            svg {
                #star-01 {
                    * {
                        opacity: 1;
                        fill: #3586D3;
                    }
                }

                #star-02 {
                    * {
                        opacity: 1;
                        fill: #3586D3;
                    }
                }
            }
        }
    `}

    ${props => (props.difficult === 'hard') && css`
        .container-image {
            svg {
                #star-01 {
                    * {
                        opacity: 1;
                        fill: #3586D3;
                    }
                }

                #star-02 {
                    * {
                        opacity: 1;
                        fill: #3586D3;
                    }
                }

                #star-03 {
                    * {
                        opacity: 1;
                        fill: #3586D3;
                    }
                }
            }
        }
    `}

    .container-image {
        width: 5em;
        height: 2.35em;

        svg {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .text {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        margin-top: 3px;
        color: #3586D3;
    }
`;