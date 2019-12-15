import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ScoreContext } from '../context/ScoreContext';
import Background from '../components/Background';

const Menu = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  padding: 8px;
  border: 5px solid #0e0e0e;
  background-color: #f2f2f2;
  margin-bottom: 16px;
  font-size: 2em;
  border-radius: 1em;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StartMenu({ children }) {
  const [_, dispatch] = React.useContext(ScoreContext);
  const [confirmed, setConfirmed] = React.useState(false);

  const handleSelect = (writingsystem) => {
    setConfirmed(true);
    dispatch({ type: 'SET_WRITING_SYSTEM', writingsystem });
  };

  if (confirmed) {
    return children;
  }

  return (
    <Background>
      <Menu>
        <Item onClick={() => handleSelect('hiragana')}>Hiragana</Item>
        <Item onClick={() => handleSelect('katakana')}>Katakana</Item>
      </Menu>
    </Background>
  );
}

StartMenu.propTypes = {
  children: PropTypes.node.isRequired,
}
