import styled, { css } from "styled-components";
import { SummaryCardProps } from "../../interfaces/SummaryCardProps";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
;`

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;

  }

  ${props => props.variant === 'green' && css`
    background-color: ${props.theme['green-700']};
  `}
`