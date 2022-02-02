import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #777171;
    animation: fade-in 0.5s linear;

    .noItems {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 120px);

        svg {
            margin-bottom: 20px;
            color: #81343a;
        }
        h1 {
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
            color: white;
        }
    }
    
    .errorMessage{
        height: 20px;
        color: red;
    }
    .checkoutForm {
        display: flex;
        flex-direction: column;
        width: 100%;
        h1 {
            font-size: 26px;
            margin-bottom: 30px;
            font-weight: medium;
            color: white;
        }

        .fieldsetWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        fieldset {
            all: unset;
            display: flex;
            flex-direction: column;
            width: 100%;

            &.inputSmall {
                width: 40%;
            }
            &.inputMedium {
                width: 50%;
            }
            &.inputMediumLarge {
                width: 60%;
            }
            &.inputLarge {
                width: 100%;
            }
        }
        fieldset:first-of-type {
            margin-right: 20px;
        }
        .input {
            height: 40px;
            padding: 0px 5px 0px 10px;
            margin-bottom: 15px;
            border: 2px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            width: 100%;

            &.inputError {
                border-color: red;
            }
            :focus {
                outline: none;
                box-shadow: 0 0 0 4px #81343a;
            }
        }
    }
    .couponInputWrapper{
        display: flex;
        width: 75%;

        .addIcon {
            left: -20px;
            top: -7px;
            position: relative;
        }

    }
    .checkoutItems {
        width: 100%;
        margin: 40px 0px;

        .rareItem {
        color: yellow;
        }

        table {
            width: 100%;
            text-align: left;
            display: table;
            border-collapse: collapse;

            th {
                font-size: 15px;
                color: white;
                font-weight: normal;
            }
            td {
                padding-right: 20px;
                color: #F1C621;
                text-shadow: 1px 1px 10px black;
            }
            th {
                padding-right: 20px;
            }
            td:last-of-type {
                padding-right: 0px;
            }
            tbody {
                .poster {
                    padding: 5px 0;
                    width: 50px;
                    height: 80px;
                    
                    img {
                        width: 100%;
                        height: 100%;
                        box-shadow: black 0.5px 0.5px 5px 0.5px;
                    }
                }
                .quantity {
                    text-align: center;
                }
                .price {
                    min-width: 90px;
                }
                tr {
                    border-bottom: 2px solid #81343a;
                    height: 80px;
                }
            }
            tbody:last-of-type tr {
                border: none;
            }
        }
        .trashIcon {
            all: unset;
            width: 30px;
            height: 30px;
            color: gainsboro;
            cursor: pointer;
            :hover{
                color: red;
            }
        }

        .bottom {
            height: 100px;
            margin: 40px 0px;
            .total {
                display: flex;
                align-items: center;
                margin-bottom: 50px;
                font-weight: bold;
                color: white;

                p:first-of-type {
                    font-size: 18px;
                    flex-grow: 1;
                }
                .totalValue {
                    font-size: 24px;
                    justify-self: flex-end;
                    text-shadow: 1px 1px 10px black;
                }
            }
            .button{
                all: unset;
                cursor: pointer;
                display: flex;
                background-color: #81343a;
                color: white;
                align-items: center;
                justify-content: center;
                padding: 3px;
                border-radius: 5px;
                :hover{
                    background-color: #F1C621;
                    color: black;
                    font-weight: bold;
                }
            }
        }
    }
    
        @media screen and (min-width: 900px) {
    .checkoutWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;

        .checkoutForm {
            width: unset;
            margin-right: 20px;
            fieldset {
                max-width: 420px;
            }
            .input {
                margin-bottom: 15px;
            }
        }
        .checkoutItems {
            max-width: 420px;
            margin-top: 90px;

            table tbody .poster {
                width: 70px;
                height: 60px;
            }
        }
    }
    }
`;
