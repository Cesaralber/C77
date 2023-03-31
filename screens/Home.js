import React, { Component } from "react";
import { Text,View, StyleSheet, SafeAreaView, Platform, StatusBar,
TouchableOpacity, ImageBackground, Image} from "react-native";

export default class HomeScreen extends Component{
render(){
return(
<View style={styles.container}>
<SafeAreaView styles={styles.dropSafeArea} />
<ImageBackground source={require("../assets/bg_updates.jpg")} 
style={styles.backgroundImage}>
<View style={styles.titleBar}>
<Text style={styles.titleText}>Locación de la EEI</Text>
</View>
<TouchableOpacity style={styles.roadCar} 
onPress={()=>this.props.navigation.navigate("IssLocation")}>
<Image source={require("../assets/iss_icon.png")}
style={styles.iconImage}/>
<Text style={styles.roadText}>Ubicación de EEI</Text>    
</TouchableOpacity>
<TouchableOpacity style={styles.roadCar}
onPress={()=>this.props.navigation.navigate("Meteors")}>
<Image source={require("../assets/meteor_icon.png")}
style={styles.iconImage}/>
<Text style={styles.roadText}>Meteoros</Text>    
</TouchableOpacity>
</ImageBackground>
</View>
)
}
}
const styles = StyleSheet.create({
 container:{
    flex:1
 },
 dropSafeArea:{
   marginTop:Platform.OS == "android"?StatusBar.currentHeight:0
 },
 titleText:{
   fontSize:40,
   fontWeight:"bold",
   color:"white"
 },
 titleBar:{
   flex:0.15,
   justifyContent:"center",
   alignItems:"center"
 },
 roadCar:{
   flex:0.25,
   marginRight:50,
   marginLeft:50,
   marginTop:50,
   borderRadius:30,
   backgroundColor:"white"
 },
 roadText:{
    fontSize:35,
    fontWeight:"bold",
    color:"black",
    marginTop:75,
    paddingLeft:30
 },
 backgroundImage:{
    flex:1,
    resizeMode:"cover"
 },
 iconImage:{
position:"absolute",
height:200,
width:200,
resizeMode:"contain",
right:20,
top:-80
 }
})