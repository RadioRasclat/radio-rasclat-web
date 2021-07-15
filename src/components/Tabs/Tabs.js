import React, { useEffect, useMemo } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { activeIndexAtom, labelArrayAtom } from './tabStates';

const TabNames = styled.div`
  display: flex;
  background: #eee;
`;

const TabContent = styled.div`
  padding: 10px;
`;

/**
 * It is a component to render Tabs' labels and the active tab's content.
 * @param {Object} props The component props
 */
export const Tabs = (props) => {
  const [activeIndex, setActiveIndex] = useRecoilState(activeIndexAtom);
  const setLabelArray = useSetRecoilState(labelArrayAtom);
  const { activeIndex: initialActiveIndex, children } = props;
  const childrenArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  );

  useEffect(() => {
    const tabLabels = childrenArray.map((tab) => tab.props.label);
    setLabelArray(tabLabels);
    if (initialActiveIndex > 0 && initialActiveIndex < tabLabels.length) {
      setActiveIndex(initialActiveIndex);
    }
  }, [childrenArray, initialActiveIndex, setActiveIndex, setLabelArray]);

  return (
    <>
      <TabNames>
        {childrenArray.map((tab, index) => (
          <div key={tab.props.label} onClick={() => setActiveIndex(index)}>
            {tab}
          </div>
        ))}
      </TabNames>
      <TabContent>
        {childrenArray[activeIndex] &&
          childrenArray[activeIndex].props.children}
      </TabContent>
    </>
  );
};
