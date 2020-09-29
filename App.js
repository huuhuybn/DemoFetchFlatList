import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {useEffect, useState} from 'react';

export default function App() {

    const url = 'https://jsonplaceholder.typicode.com/posts/';

    const [data, setData] = useState();

    const [arr, setArr] = useState([]);

    const image_url = 'https://gv.poly.edu.vn/images/logo.png';

    // chương trình chạy vào 1 lần trước khi render (trước khi chạy hàm return)
    useEffect(() => {

        fetch(url)
            // chuyen du lieu ve dang json
            .then((response) => response.json())
            // duoc goi khi ket thuc request du lieu
            .then((responseJson) => {
                setArr(responseJson);
            })
            // goi khi xay ra loi request
            .catch((error) => {
                console.error(error);
            });
    })
    return (
        <View style={styles.container}>
            <FlatList style={{flex: 1}}
                      data={arr}
                      renderItem={({item}) => (
                          <View style={{borderWidth: 1, margin: 8}}>
                              <Text>{item.title}</Text>
                              <Text>{item.body}</Text>
                          </View>
                      )}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
