import styled from 'styled-components';

export interface LogoProps {
  fontSize?: number,
}

export function Logo({ fontSize }: LogoProps) {
  return (
    <>
      <Text fontSize={fontSize}>
      WAITER
        <span>APP</span>
      </Text>
    </>
  );
}

const Text = styled.div<LogoProps>`
  font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray['500']};

  span {
    font-weight: 400;
  }
`;
