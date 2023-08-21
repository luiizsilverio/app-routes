import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function StacksRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="home"
                component={Profile}
            />
        </Stack.Navigator>
    )
}