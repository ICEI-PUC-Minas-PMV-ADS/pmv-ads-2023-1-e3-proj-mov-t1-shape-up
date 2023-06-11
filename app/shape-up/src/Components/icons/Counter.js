import React from "react";
import { Icon, Box, Center, NativeBaseProvider, Text } from "native-base";
import { Path, G } from "react-native-svg";

export default function Counter(props) {
    return(
      <Box flex={0} flexDirection='row' alignItems='center' justifyContent='center'>
      <Icon style={{...props.style, alignItems: 'center', justifyContent: 'center', flex: '1'}} size='3xl' viewBox="0 0 47 36">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Path d="M16.5 12H19.5V21H16.5V12ZM22.5 1.5H13.5V4.5H22.5V1.5ZM18 30C12.195 30 7.5 25.305 7.5 19.5C7.5 13.695 12.195 9 18 9C23.805 9 28.5 13.695 28.5 19.5C29.55 19.5 30.54 19.695 31.5 20.025C31.5 19.845 31.5 19.68 31.5 19.5C31.5 16.32 30.39 13.395 28.545 11.085L30.675 8.955C30 8.19 29.325 7.5 28.56 6.84L26.43 9C24.105 7.11 21.18 6 18 6C10.545 6 4.5 12.045 4.5 19.5C4.5 26.955 10.545 33 18 33C18.885 33 19.74 32.91 20.565 32.745C20.1 31.875 19.77 30.9 19.62 29.865C19.08 29.94 18.555 30 18 30Z" fill="#FF4444" />
        </G>
        <Box style={{position: 'relative', justifyContent: 'flex-end', width: 36, height: 36, paddingBottom: 3, paddingRight: 3}}>
          <Text style={{fontSize: 12, fontFamily: 'Roboto', fontWeight: 'regular', alignSelf: 'flex-end'}} color='#fff'>{`${props.restTime}s`}</Text>
        </Box>
      </Icon>
  </Box>
    );
}