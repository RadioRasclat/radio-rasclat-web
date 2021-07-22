import React from 'react';

import Box from './Box';

const stories = {
  title: 'Components'
};

export default stories;

export const defaultBox = () => {
  return (
    <Box
      p={3}
      mb={[ 4, 5 ]}
      color="background"
      bg="primary">
      Cookies!
    </Box>
  );
};
