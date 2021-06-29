import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';

const App = () => {
    return(
        <View style={viewStyles.container}>
            <Text style={[textStyles.text, {color: 'green'}]}> Inline Styling - Text </Text>
            <Text style={[textStyles.text, textStyles.error]}> Inline Styling - Error </Text>
        </View>
    );
};

export default App;

/* 외부에서 작성한 스타일 파일을 적용시킨 예제.*/