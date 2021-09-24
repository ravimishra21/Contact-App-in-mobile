import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { getColorByLetter } from '../utils/index'

export const ContactCard = ({ ContactInfo }) => {

    const {  displayName } = ContactInfo;
    const color = getColorByLetter(displayName[0]);


    return (
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <View style={{...styles.icon , backgroundColor: color}}>
                    <Text style={styles.iconContent}>{displayName[0]}</Text>
                </View>
                <Text style={styles.primaryText}>{displayName}</Text>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 5
    },
    infoContainer : {
        flexDirection: 'row',
        alignItems:"center",
        paddingVertical: 5
    },
    primaryText: {
        fontSize:20
    },
    iconContent : {
        flex:1,
        paddingVertical : 5,
        fontSize : 24,
        color:"white",
        marginHorizontal: 10
    },
    icon: {
        borderRadius : 25,
        // aspectRatio means height / width = 1;
        aspectRatio : 1, 
        alignItems: "center",
        justifyContent:"center",
        marginRight : 15, 
        paddingVertical:1, 
        backgroundColor: 'green'
    }

})
