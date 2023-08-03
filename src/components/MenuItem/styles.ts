import styled from 'styled-components/native';

type Props = {
  isActive: boolean;
};

export const Containers = styled.TouchableOpacity<Props>`
  align-items: center;
  background-color: ${({ isActive }: { isActive: any }) =>
    isActive ? '#1F1E25' : 'transparent'};
  padding: 24px 10px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 7px 24px 0;
`;
