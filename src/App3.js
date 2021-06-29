import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Inline Styling - Text </Text>
            <Text style={[styles.text, styles.error]}> Inline Styling - Error </Text>
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
        fontWeight: '400',
        color: 'red',
    },
});
export default App;

/* 방법2-2. 클래스 스타일링(여러개의 스타일 적용). */
/* 같은 컴포넌트에 적용되고 중복될 일이 많으면 중복되는 부분은 제거한 후 적용시킬 컴포넌트에서 사용할때 배열 형태로 적용시키면된다. */