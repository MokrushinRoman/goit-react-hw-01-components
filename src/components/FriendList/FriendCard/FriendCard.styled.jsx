import styled from '@emotion/styled';

export const Card = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

  /*  */
  & + & {
    margin-top: 10px;
  }

  & > * {
    margin-left: 10px;
  }
`;

export const FriendAvatar = styled.img`
  width: 100px;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  background-color: rgba(147, 134, 246, 0.11);
`;

export const FriendName = styled.p`
  font-weight: 600;
  font-size: 25px;
`;

export const Badge = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${setBadgeBgColor};
`;
function setBadgeBgColor({ isOnline }) {
  return isOnline ? 'rgb(21, 172, 21)' : 'rgb(230, 23, 23)';
}
