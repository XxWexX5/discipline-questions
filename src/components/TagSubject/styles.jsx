import styled from 'styled-components';

export const WrapperTagSubject = styled.div`
    display: flex;
    align-items: center;

    .container-image {
        width: 3.35em;
        height: 3.35em;
        margin-right: .65em;

        .image {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .text {
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
        text-transform: uppercase;
    }
`;