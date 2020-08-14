import { StyleSheet } from "react-native"

const styles = StyleSheet.create(
{
    container:
    {
        backgroundColor: '#245655',
        flex: 1,
        padding: 35
    },

    iconContainer:
    {
        alignItems: 'center',
        height: '40%',
        justifyContent: 'center',
        width: '100%'
    },

    icon:
    {
        height: '90%',
        width: '58%'
    },

    infoContainer:
    {
        alignItems: 'center',
        height: '60%',
        justifyContent: 'center',
        marginTop: 10,
        width: '100%'
    },

    infoBox:
    {
        borderColor: '#D4D4F7',
        borderWidth: 5,
        padding: 5
    },

    infoBoldText:
    {
        color: '#D4D4F7',
        fontFamily: 'Roboto_700Bold',
        fontSize: 17,
        textAlign: 'left'
    },

    infoText:
    {
        color: '#D4D4F7',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        textAlign: 'left'
    }
})

export default styles