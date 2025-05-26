import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
    
`;


export const Content = styled.div`
    background-color: #FFF;
    width: 40%;
    min-height: 350px;
    border-radius: 10px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;