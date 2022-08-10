import React from 'react';
import { Box, styled } from '@material-ui/core';

export default function Logo() {
  return (
    <StyledLogoBox display="flex" alignItems="center" justifyContent="space-between">
      <div>Logo</div>
    </StyledLogoBox>
  )
}

const StyledLogoBox = styled(Box)({
  padding: '1.625rem 1.25rem',
  borderRadius: '50%',
  border: '1px solid #fff'
});