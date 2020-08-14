import {StyleSheet} from 'react-native'

const styles = StyleSheet.create(
{
    container:
    {
        backgroundColor: '#420C14',
        flex: 1,
        padding: 35
    },

    promptContainer:
    {
        height: '30%',
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
        height: '65%',
        justifyContent: 'space-around',
        marginTop: 15,
        width: '100%'
    },

    button:
    {
        alignItems: 'center',
        backgroundColor: '#FF8A00',
        borderRadius: 20,
        height: '20%',
        justifyContent: 'center',
        width: '100%'
    },

    buttonText:
    {
        color: '#420C14',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 30,
        textAlign: 'center'
    }
})

export default styles