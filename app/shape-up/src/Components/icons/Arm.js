import React from "react";
import { Icon, Box, Center, NativeBaseProvider, Text } from "native-base";
import { Path, G } from "react-native-svg";

export default function Arm(props) {
    return(
      <Box flex={0} flexDirection='row' alignItems='center' justifyContent='center'>
      <Icon style={{...props.style}} size='2xl' viewBox="0 0 36 36">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Path d="m10.5 11.64V24.375H16.62L17.52 23.01C19.26 20.325 22.395 19.125 24.705 19.125C25.5 19.125 26.175 19.26 26.685 19.5C28.05 20.115 28.425 21.27 28.5 22.11C28.62 23.805 27.75 25.545 26.25 26.565C24.9 27.495 21.66 28.5 17.805 28.5C15.18 28.5 11.415 28.035 7.68 25.95C8.115 22.275 9 16.32 10.5 11.64ZM10.5 4.5C6 10.635 4.5 27.51 4.5 27.51C8.85 30.465 13.62 31.5 17.805 31.5C22.29 31.5 26.085 30.315 27.96 29.04C32.46 25.98 32.91 19.065 27.96 16.77C27 16.335 25.89 16.125 24.705 16.125C21.255 16.125 17.25 17.94 15 21.375H13.5V10.635H16.5L18 6L10.5 4.5Z" fill="#FF4444" />
        </G>
        <Box style={{position: 'relative', justifyContent: 'flex-start', width: 48, height: 48, paddingBottom: 3, paddingRight: 15}}>
            <Text style={{fontSize: 12, fontFamily: 'Roboto', fontWeight: 'regular', alignSelf: 'flex-end'}} color='#fff'>{props.reps}</Text>
        </Box>
      </Icon>
  </Box>
    );
}