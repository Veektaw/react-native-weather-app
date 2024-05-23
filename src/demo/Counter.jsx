import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const Counter = ()=> {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);

    useEffect  (() => {
        console.log('Count is: ', count);
    }, [count])
    const decrementCount = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Count: ${count}`}</Text>
            <Button 
                color={'red'}
                title="Increment"
                onPress={()=> setCount(count + 1)}
            />
            <Button
                color={'blue'}
                title="Decrement"
                onPress={decrementCount}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25,
    },
})
export default Counter