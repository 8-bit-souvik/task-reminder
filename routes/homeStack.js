// import { createStackNavigator } from "react-navigation-stack";
import { createStackNavigator } from "@react-navigation/native-stack";
import { ActionCreators, NavigationContainer } from "@react-navigation/native";
import Home from "./../screens/home"
import Memo from "./../screens/memo"

const screens = {
    Home: {
        screen: Home
    },
    Memo: {
        screen: Memo
    }
}




const HomeStack = createStackNavigator(screens);

export default function () {
    return <NavigationContainer>{HomeStack}</NavigationContainer>
};

// export default createAppContainer(HomeStack);