import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;

  border: ${({ theme }) => {
    return theme.border;
  }};
  border-radius: ${({ theme }) => {
    return theme.borderRadius;
  }};

  box-shadow: ${({ theme }) => {
    return theme.boxShadow;
  }};
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;

  > ul {
    margin: 20px 0;
  }

  li:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: tan;
`;

export const DescriptionList = styled.ul`
  margin: 20px 0;

  text-align: center;
`;

export const DescriptionItem = styled.li`
  margin-bottom: 5px;

  color: ${({ theme }) => {
    return theme.colors.gray;
  }};
`;

export const UserName = styled.p`
  color: ${({ theme }) => {
    return theme.colors.black;
  }};
  font-weight: 600;
  font-size: 30px;
`;

// Stats

export const UserStatsList = styled.ul`
  display: flex;
  width: 100%;
`;

export const UserStat = styled.li`
  width: calc(100% / 3);
  padding: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.3);

  text-align: center;

  background-color: rgba(147, 134, 246, 0.11);
  color: ${({ theme }) => {
    return theme.colors.gray;
  }}; ;
`;

export const Label = styled.span`
  color: ${({ theme }) => {
    return theme.colors.gray;
  }};
`;

export const Quantity = styled.span`
  font-weight: 600;

  color: ${({ theme }) => {
    return theme.colors.black;
  }};
`;
