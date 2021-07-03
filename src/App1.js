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

/* 인라인 방식의 CSS는 클래스 OR 컴포넌트형 함수들에서 js object형식으로 만들어서 직접 태그에 넣는 방식의 스타일 방식.
   APP 함수에 직접 작성.*/
