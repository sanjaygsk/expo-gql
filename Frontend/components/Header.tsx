import { StyleSheet, View } from "react-native"


const Header = () => {
    return (
        <View style={Styles.container} />
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 48,
        width: '100%',
        backgroundColor: '#F5F5F5',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    }
})

export default Header;