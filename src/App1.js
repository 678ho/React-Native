import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                padding: 10,
                fontSize: 26,
                fontWeight: '600',
                color: 'black',
            }}> Inline Styling - Text </Text>

            <Text style={{
                padding: 10,
                fontSize: 26,
                fontWeight: '400',
                color: 'red',
            }}> Inline Styling - Error</Text>

        </View>   
    );
};

export default App;

/* Inline Styling은 HTML의 인라인 스타일링처럼 컴포넌트에 직접 스타일을 입력하는 방식.
   But 리액트 네이티브에서는 객체 형태로 전달. */