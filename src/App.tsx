import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import { useState } from 'react';
import './index.css';
import Header from './components/common/Header';
import Intro from './components/common/Intro';
import { ChildrenList }  from './components/shared/styles/ChildrenList';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

interface IChildren {
  id: Number,
  address: String
}

interface IChildrenList extends Array<IChildren>{}

export default function App() {
  const childrenListArray: IChildrenList = [
    {
      id: 1,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 2,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 3,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 4,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 5,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 6,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 7,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 8,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 9,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 10,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 11,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 12,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 13,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 13,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 14,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 15,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 16,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 17,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 18,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 19,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    },
    {
      id: 20,
      address: '0x16BAf05B3150Eaf04a36F46c847a310C26e7614c'
    }
  ]
  const [childrenList] = useState<IChildrenList>(childrenListArray)
  return (
    <Container maxWidth="lg">
      <Header />
      <Intro />
      <Box display="flex" justifyContent="center" columnGap="4rem" mt="3.375rem">
        <ChildrenList>
        <Typography variant="subtitle2" component="div" sx={{color: '#E7D323', fontWeight: '400', textDecoration: 'underline'}}>GetOpenEnds(20)</Typography>
          <List>
            {
              childrenList.map((item, index) => (
                <ListItem disablePadding sx={{display: 'flex'}}>
                   <Box>{index}.</Box>
                    <ListItemText >
                      <Typography variant="subtitle1" component="div" ml="0.625rem" mr="1.75rem">{item.address}</Typography>
                    </ListItemText>
                  <SvgIcon width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="3.5" width="14" height="20" rx="1.5" stroke="#D9D9D9"/>
                    <rect x="3.5" y="0.5" width="14" height="20" rx="1.5" stroke="#D9D9D9"/>
                  </SvgIcon>
                </ListItem>
              ))
            }
          </List>
        </ChildrenList>
        <Box display="flex" flexDirection="column" alignItems="flex-end" rowGap="5rem" width="25rem">
          <TextField sx={{width: '100%'}} id="standard-basic" label="Parent Link" variant="standard" />
          <Button sx={{width: '140px'}} variant="contained">Join</Button>
        </Box>
      </Box>
    </Container>
  );
}