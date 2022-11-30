import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 80px 0;

  & > * {
    margin-inline: auto;
  }
`;

/* 
  & > *:not(:first-child) {
    margin-top: 80px;
  } */
