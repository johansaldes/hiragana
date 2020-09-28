import styled from "styled-components";
import { motion } from "framer-motion";

export const AnswerButton = styled.button`
  font-size: 2rem;
  padding: 1rem;
  width: 6rem;
  border: 1px solid #0e0e0e;
  border-radius: 2px;
  outline: none;
`;

export const cardVariants = {
  success: { borderColor: '#21b36f' },
  fail: { borderColor: '#d43622' },
  default: { borderColor: '#0e0e0e' },
};

export const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  background-color: #f2f2f2;
  color: #0e0e0e;
  border-radius: 1rem;
  border: 10px solid #0e0e0e;
  width: 500px;
  @media only screen and (max-width: 480px) {
    padding: 1rem;
    width: calc(100% - 2rem);
  }
`;
