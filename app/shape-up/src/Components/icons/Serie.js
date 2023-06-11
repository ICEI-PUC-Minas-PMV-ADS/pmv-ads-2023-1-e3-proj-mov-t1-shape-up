import React from "react";
import { Icon, Box, Center, NativeBaseProvider, Text } from "native-base";
import { Path, G } from "react-native-svg";

export default function Serie(props) {
    return(
      <Box flex={0} flexDirection='row' alignItems='center' justifyContent='center'>
      <Icon style={{...props.style, position: 'relative', alignItems: 'center', justifyContent: 'center', flex: '1'}} size='3xl' viewBox="0 0 48 48">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Path d="M12 11.5L20.5 20H14V32H27L31 36H14C12.9391 36 11.9217 35.5786 11.1716 34.8284C10.4214 34.0783 10 33.0609 10 32V20H3.5L12 11.5ZM36 36.5L27.5 28H34V16H21L17 12H34C35.0609 12 36.0783 12.4214 36.8284 13.1716C37.5786 13.9217 38 14.9391 38 16V28H44.5L36 36.5Z" fill="#FF4444" />
        </G>
        <Center style={{position: 'relative', width: 36, height: 36}}>
          <Text style={{fontSize: 12, fontFamily: 'Roboto'}} color='#fff'>{props.series}</Text>
        </Center>
      </Icon>
  </Box>
    );
}