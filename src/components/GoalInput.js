import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

export default function (props) {

    const [goalText, setGoalText] = useState('')

    function goalInputHandler(e) {
        setGoalText(e)
    }

    function addGoalHandler() {
        props.onAddGoal(goalText);

        setGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/goal.png')} style={styles.image} />
                <TextInput placeholder='Your goal' style={styles.textInput} onChangeText={goalInputHandler} value={goalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="green" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Close' onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#311b6b',
    },
    image:{
        width:100,
        height:100,
        margin:20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:16,

    },
    button:{
        width:100,
        marginHorizontal:8
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color:'#120438',
        width: '100%',
        padding: 10,
        marginRight: 8,
        borderRadius:6,
    },
})