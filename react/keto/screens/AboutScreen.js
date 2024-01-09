import React from 'react';
import {ScrollView, Text, View, StyleSheet, Image, Pressable } from 'react-native';
import Header from '../components/Header';
import Me from '../assets/icon.png';
import * as MailComposer from 'expo-mail-composer'

const AboutScreen = () => {
    const sendRecipeSubmissionMail = () => {
        MailComposer.composeAsync({
            recipients: ['aceppaluni@aol.com'],
            subject: 'Recipe Submisson',
            body: ''
        })
    }

    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['aceppaluni@aol.com'],
            subject: '',
            body: ''
        })
    }

  return (
    <ScrollView style={styles.view} >
        <Header />
        <View >
            <Text style={styles.titleText}>About</Text>
        </View>
        <View>
            <Image source={Me} style={styles.image} />
        </View>
        <View>
            <Text style={styles.text}>Hello There! </Text>
            <Text style={styles.text}>Thank you for visting Keto Neato.  
                This site was created with the intent of provinding resources and information about the keto diet. 
            </Text>
            <Text style={styles.text}>
            Our founders have been doing the Keto diet for many years and now they want to share their repcies as well as tips and 
            tricks they have come accross in their journey. 
            </Text>
            <Text style={styles.text}>
            Please feel free to send us recipies of your own using the link below! 
            We would love to add them to our list and we will feature your name with your recipie!
            </Text>
            <Text style={styles.text}>If you have any questions or even recipies of your own youd like to add, send us an email </Text>
        </View>
        <View>
            <Pressable style={styles.button} onPress={() => sendRecipeSubmissionMail()}>
                <Text style={styles.buttonTxt}>Recipe Submission</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => sendMail()}>
                <Text style={styles.buttonTxt}>Email</Text>
            </Pressable>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#A2BCFF",
        color: '#307418',
    },
    titleText: {
        color: '#307418',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 8
    },
    image: {
        width: 110,
        height: 110,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    text: {
        color: '#307418',
        fontSize: 18,
        margin: 30
    },
    button: {
       backgroundColor: '#307418',
       color: '#fff',
       alignItems: 'center',
       padding: 10,
       borderRadius: 5,
       margin: 10
    },
    buttonTxt: {
        color: 'white',
        fontSize: 20,
    }
})


export default AboutScreen