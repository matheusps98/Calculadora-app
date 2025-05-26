import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    background-color: blue;
    color: white;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex: 1;
    &:hover {
        background-color: darkblue;
    }
`;
