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
    },

    backButtonContainer:
    {
        marginBottom: 15
    },

    backButton:
    {
        height: 30,
        width: 30
    },

    list:
    {
        minHeight: 300
    },

    // ListItem

    listItem:
    {
        backgroundColor: '#26070B',
        flexDirection: 'row',
        padding: 10,
        marginBottom: 5
    },

    listItemImage:
    {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10
    },

    listItemName:
    {
        fontFamily: 'Roboto_700Bold',
        color: '#FF8A00',
        textAlignVertical: 'center',
        fontSize: 20,
        width: 200
    },

    // item

    infoContainer:
    {
        flex: 1,
        alignItems: 'center'
    },

    itemImage:
    {
        height: 300,
        width: 300,
        borderRadius: 25
    }
})

export default styles