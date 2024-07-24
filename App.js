import { StyleSheet, Text, View ,Button,Image,Alert } from 'react-native';
import React ,{useState} from "react";
import * as ImagePicker from 'expo-image-picker';


export default function App() {

     const [image,setImage] = useState(null);

     const pickImage = async() => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All, // for both image and videos
        allowsEditing: true,
        aspect:[4,4],
        quality:1
      });
      console.log(result);
      Alert.alert('Photo was upload in Local Server');

      if(!result.canceled){
        setImage(result.uri);
      }
     }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image Picker</Text>
      <Button
        title="Pick an image from gallery"
        onPress={pickImage}
      />
      {image && <Image source={{uri :image}} style={styles.image}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff',
    marginBottom :50
  },
  image :{
    width:250,
    height:250,
    marginTop:30
  }
});
