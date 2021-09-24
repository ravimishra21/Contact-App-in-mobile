import React , {useState ,useEffect} from 'react'
import { View, Text ,FlatList, StyleSheet,TouchableOpacity, PermissionsAndroid} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Contacts from 'react-native-contacts'
import { useIsFocused } from '@react-navigation/core'
import { ContactCard } from '../components/ContactCard'


// app.js me hamne screen di hui hai isliye MyContact me hme ek navigation krke props milta hai .
export default function MyContacts( { navigation } ) {

  const isFocused = useIsFocused();

  const [MyContacts , setMyContacts] = useState([]);
  useEffect(() => {
    getAllContacts();
  }, [isFocused])

  async function getAllContacts() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      );
      if(permission === "granted" ) {
        const contacts = await Contacts.getAll();
        setMyContacts(contacts);
      }
    }catch (error) {
      console.log(error);
    }
  }

    return (
        <View>
        <Ionicons name='add-circle' size={62} color='green' style={styles.addIcon} 
        onPress={() => navigation.navigate('CreateContact')} 
        />

        <FlatList 
        data={myContacts} 
        keyExtractor={(item) => item.recordId} 
        renderItem={({item}) => (
          // jb koi TouchableOpacity pr touch krega to wo uske profile page pr send kr dega .jb hme yahan se koi information 
          // kisi dusre page pr send krna ho to 'profile' ke baad comma dekr contactInfo ko likha h 
          <TouchableOpacity onPress={() => navigation.navigate('Profile',{
            contactInfo: {id: item.recordId }
          })}>
          
            <ContactCard  contactInfo={item}/>
          </TouchableOpacity>
        )}
         />
      </View>
    )
}


const styles = StyleSheet.create({

})