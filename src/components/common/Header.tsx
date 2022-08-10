import React from 'react';
import { Box } from '@mui/material';
import { DiscordIcon } from '../shared/DiscordIcon';
import { TwitterIcon } from '../shared/TwitterIcon';
import { YoutubeIcon } from '../shared/YoutubeIcon';
import Logo from '../shared/Logo';

export default function Header() {
  return (
    <header>
      <Box display="flex" alignItems="center" justifyContent="space-between" mt="1.25rem">
        <Logo />
        <Box display="flex" columnGap="1rem">
          <DiscordIcon width="24px" height="20px"/>
          <TwitterIcon width="24px" height="20px"/>
          <YoutubeIcon width="24px" height="20px"/>
        </Box>
      </Box>
    </header>
  )
}