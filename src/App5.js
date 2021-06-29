import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from './Layout';

const App = () => {
    return(
        <View style={viewStyles.container}>
            <Header />
            <Contents />
            <Footer />
        </View>
    );
};

export default App;

/* flex 의 역할(크기 or 넓이 비례 적용)과 외부 스타일 파일 적용 예제. */