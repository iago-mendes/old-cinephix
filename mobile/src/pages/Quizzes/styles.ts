import { StyleSheet } from "react-native"

const styles = StyleSheet.create(
{
    container:
    {
        backgroundColor: '#161C50',
        flex: 1,
        padding: 35
    },

    logoContainer:
    {
        alignItems: 'center',
        height: '25%',
        justifyContent: 'center',
        width: '100%'
    },

    logo:
    {
        height: '54%',
        width: '80%'
    },

    promptContainer:
    {
        height: '25%',
        justifyContent: 'center',
        width: '100%'
    },

    prompt:
    {
        color: '#D4D4F7',
        fontFamily: 'MeriendaOne_400Regular',
        fontSize: 30,
        textAlign: 'center'
    },

    buttonsContainer:
    {
        alignContent: 'center',
        height: '50%',
        justifyContent: 'space-around',
        marginTop: 15,
        width: '100%'
    },

    button:
    {
        alignItems: 'center',
        backgroundColor: '#FF8A00',
        borderRadius: 20,
        height: '25%',
        justifyContent: 'center',
        width: '100%'
    },

    buttonText:
    {
        color: '#161C50',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 30,
        textAlign: 'center'
    }
})

export default styles