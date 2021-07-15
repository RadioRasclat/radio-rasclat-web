import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { activeLabelSelector } from './tabStates';

const TabName = styled.h3`
  margin: 0;
  cursor: pointer;
  width: 10em;
  height: 3em;
  display: grid;
  place-items: center;
  border-radius: 10% 10% 0 0;
  border-right: 1px solid darkgrey;
  &:hover {
    background: #bbb !important;
  }
`;

/**
 * It is a component to render Tab's label. The tab shows darker color if it is active.
 * @param {Object} props The component props
 */
export const Tab = (props) => {
  const activeLabel = useRecoilValue(activeLabelSelector);
  const { label } = props;
  return (
    <TabName
      style={{
        backgroundColor: label === activeLabel ? 'darkgrey' : 'lightgrey',
      }}
    >
      {label}
    </TabName>
  );
};
