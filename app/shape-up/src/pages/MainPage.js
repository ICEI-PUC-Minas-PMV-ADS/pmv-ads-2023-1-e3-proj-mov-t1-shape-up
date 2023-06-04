import React from "react";
import { View } from "react-native";
import { Header } from "../Components/Header";
import { Tabbar } from "../Components/Tabbar";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

export function MainPage() {
    const name = "Marcos Alberto"
    return (
        <View style={{ height: "100%" }}>
            <Header name={name}></Header>
            <Tabbar></Tabbar>
        </View>
    )
}