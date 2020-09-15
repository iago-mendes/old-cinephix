import {StyleSheet} from 'react-native'

const styles = StyleSheet.create(
{
    scrollContainer:
    {
        backgroundColor: '#420C14',
        flex: 1
    },

    container:
    {
        backgroundColor: '#420C14',
        flex: 1,
        padding: 25
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
        marginTop: 15
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

    filterContainer:
    {
        alignItems: 'flex-end',
        marginBottom: 15
    },

    filterButton:
    {
        width: 125,
        height: 40,
        backgroundColor: '#FF8A00',
        borderRadius: 10,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    filterText:
    {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 25,
        color: '#420C14',

        marginLeft: 5
    },

    searchContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        backgroundColor: '#FF8A00',
        paddingHorizontal: 10,

        borderRadius: 25,
        height: 40,
        width: '100%',
        marginBottom: 15,
        marginTop: 10
    },

    search:
    {
        marginLeft: 10,
        width: 260,
        color: '#420C14',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 20
    },

    //Filter Modal

    modalView:
    {
        flex: 1,
        marginVertical: 100,
        marginHorizontal: 50,
        borderRadius: 25,
        padding: 15,
        backgroundColor: '#FF8A00',

        justifyContent: 'space-between'
    },

    modalButtonsContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    modalButton:
    {
        backgroundColor: '#420C14',
        width: 100,
        height: 50,
        borderRadius: 20,

        alignItems: 'center',
        justifyContent: 'center'
    },

    modalButtonText:
    {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 20,
        color: '#FF8A00'
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
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    itemImage:
    {
        height: 300,
        width: 300,
        borderRadius: 25
    },

    itemName:
    {
        color: '#FF8A00',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 25,
        textAlign: 'center',

        marginTop: 10
    },

    relationsContainer:
    {
        flex: 1,
        marginTop: 10
    },

    relationsTitle:
    {
        color: '#FF8A00',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 20,
        textAlign: 'center',

        backgroundColor: '#26070B',
        width: 300,
        padding: 10
    },

    relationGroup:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2.5
    },

    relationItem:
    {
        backgroundColor: '#26070B',
        width: 148.75,

        alignItems: 'center',
        padding: 5
    },

    relationItemImage:
    {
        height: 50,
        width: 50,
        borderRadius: 10
    },

    relationItemName:
    {
        color: '#FF8A00',
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        textAlign: 'center',

        marginTop: 5,
    }
})

export default styles