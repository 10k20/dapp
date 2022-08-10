import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@material-ui/core';
import { VideoPlayer } from '../shared/styles/VideoPlayer';
import ArrowDownIcon from '../../assets/img/icons/arrow-down.svg';

export default function Intro() {
  return (
    <Box position="relative" mt="4rem" pb="7.5rem" borderBottom="1px solid #6D23E7">
      <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay controls></VideoPlayer>
      <StyledArrowDownIcon src={ArrowDownIcon}/>
    </Box>
  );
};

export const StyledArrowDownIcon = styled('img')({
  position: 'absolute',
  bottom: '7.5rem',
  right: '0px'
})