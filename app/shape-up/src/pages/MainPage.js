import React from "react";
import { View } from "react-native";
import { Header } from "../Components/Header";
import { Tabbar } from "../Components/Tabbar";
import AuthContext from '../contexts/AuthContext';

export default function MainPage() {

    const { user } = React.useContext(AuthContext);

    return (
        <View style={{ height: "100%" }}>
            <Header name={user.name}></Header>
            <Tabbar></Tabbar>
        </View>
    )
}