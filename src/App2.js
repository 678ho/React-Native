import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Inline Styling - Text </Text>
            <Text style={styles.error}>Inline Styling - Error </Text>
        </View>   
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: 'black',
    },
    error: {
        padding: 10,
        fontSize: 26,
        fontWeight: '400',
        color: 'red',
    },
});
export default App;

/* 방법2. 클래스 스타일링. */
/* 스타일시트에 정의된 스타일링을 사용하는 방식.
   CSS를 사용하는 방법과 유사. */