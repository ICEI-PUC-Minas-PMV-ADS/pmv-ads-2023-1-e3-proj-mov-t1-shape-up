import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G } from "react-native-svg";

export function Dumbbell(props) {
    return <Center>
      <Icon style={{...props.style}} size='47' viewBox="0 96 960 960">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Path d="m826 471-42-42 45-45-157-157-45 45-43-43 30-31q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857 441l-31 30ZM346 952q-23 23-56.5 23T233 952L90 809q-17-17.378-17-42.689T90 724l44-44 43 42-45 45 157 157 45-45 42 43-30 30Zm397-308 85-85-331-331-85 85 331 331ZM463 924l86-86-331-331-86 86 331 331Zm9-248 109-109-92-92-109 109 92 92Zm33 290q-16.934 17-41.967 17Q438 983 421 966L90 635q-17-16.934-17-41.967Q73 568 90 551l85-86q17.378-17 42.689-17T260 465l77 77 110-110-77-77q-17-16.934-17-41.967Q353 288 370 271l85-86q17.378-17 42.689-17T540 185l331 331q17 17.378 17 42.689T871 601l-86 85q-16.934 17-41.967 17Q718 703 701 686l-77-77-110 110 77 77q17 17.378 17 42.689T591 881l-86 85Z" fill="#FF4444" />
        </G>
      </Icon>
    </Center>;
}