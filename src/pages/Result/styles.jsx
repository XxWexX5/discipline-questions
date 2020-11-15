import styled from 'styled-components';

export const WrapperResult = styled.div`
    .container {
        max-width: 50em;
        min-height: 91vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .container-image {
            width: 100%;
            height: 11em;
            margin-top: 1.35em;

            svg {
                width: 100%;
                height: 100%;

                #elements {
                    * {
                        fill: ${ props => props.color };
                    }
                }
            }
        }

        .container-tag-result {
            margin: 2em 0;
            background-color: ${ props => props.color };
            color: #FFFFFF;
            font-weight: bold;
            padding: .65em 2em;
            font-size: 21px;
            border-radius: 2em;

            .separator {
                background-image: url('../../../assets/images/element-dots.svg');
                background-size: contain;
                background-repeat: repeat-x;
                background-origin: center center;
                width: 100%;
                border: 0;
                position: absolute;
                left: 0;
                height: 24px;
                z-index: 1;
            }
        }

        .wrapper-result-final {
            .header {
                .box {
                    background-color: #FFFFFF;
                    box-shadow: 1px 2px 6px rgba(0, 0, 0, .35);
                    border-radius: .65em;
                    padding: .65em 1.35em;
                    text-align: center;
                    line-height: 1.35em;
                    width: 100%;
                    max-width: 200px;
                    margin: auto;

                    .row {
                        justify-content: space-around;
                    }

                    .correct {
                        * {
                            color: #4ECC58;
                        }
                    }

                    .wrong {
                        * {
                            color: #E8354D;
                        }
                    }

                    .row {
                        .col + .col {
                            margin-left: 2.35em;
                        }

                        .title {
                            font-size: 24px;
                            font-weight: bold;
                        }

                        .text {
                            font-size: 18px;
                        }
                    }
                }
            }

            .main {
                margin: 2em 0 .8em 0;

                .list-items {
                    width: 23em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .item {
                        .title {
                            font-size: 18px;
                            margin-bottom: .35em;
                            display: block;
                            color: #333333;
                        }

                        .text {
                            font-size: 14px;
                            color: #333333;
                        }
                    }

                    .item + .item {
                        position: relative;

                        &:before {
                            content: '';
                            border-left: 1px solid #707070;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: -75%;
                            width: 1px;
                            height: 85%;
                            margin: auto;
                        }
                    }
                }
            }
        }

        .container-button {
            width: 100%;
            margin: 1.65em 0;

            .btn-home {
                width: 100%;
                border: 0;
                background-color: ${ props => props.color };
                border-radius: 2em;
                padding: .75em 0;
                color: #FFFFFF;
                font-weight: bold;
                font-size: 18px;
                cursor: pointer;

                &:hover {
                    opacity: .75;
                }
            }
        }
    }
`;