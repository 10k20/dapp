import * as React from 'react';
import Container from '@mui/material/Container';
import {Box, List, ListItem, ListItemText, TextField, Button} from '@mui/material';
import { useState } from 'react';
import './index.css';
import Header from './components/common/Header';
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
      <Box sx={{ my: 4 }}>
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay controls></video>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" columnGap="4rem">
        <Box>
          <List>
            {
              childrenList.map(item => (
                <ListItem disablePadding>
                  <ListItemText>
                    {item.address}
                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
        </Box>
        <Box display="flex" flexDirection="column" rowGap="5rem" width="25rem">
          <TextField id="standard-basic" label="Parent Link" variant="standard" />
          <Button variant="contained">Join</Button>
        </Box>
      </Box>
    </Container>
  );
}