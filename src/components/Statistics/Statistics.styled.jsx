import styled from '@emotion/styled';
import { getRandomHexColor } from 'helpers';

export const StatisticsCard = styled.section`
  width: 400px;
  margin: 0 auto;

  border: ${({ theme }) => {
    return theme.border;
  }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};

  box-shadow: ${({ theme }) => {
    return theme.boxShadow;
  }};

  text-align: center;
`;

export const StatsTitle = styled.h2`
  margin: 30px 0;
`;

export const StatsList = styled.ul`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const StatsItem = styled.li`
  width: calc(100% / 5);
  padding: 10px 0;

  background-color: ${getRandomHexColor};
  color: ${({ theme }) => {
    return theme.colors.white;
  }}; ;
`;

export const Format = styled.span`
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 25px;
`;
