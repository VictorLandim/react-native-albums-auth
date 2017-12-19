import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Button, CardSection, Card } from '../components/common';

const AlbumDetail = (props) => {
    const { title, artist, thumbnail_image, image, url } = props.album;
    const {
        textBlockStyle, thumbailStyle, imageStyle,
        thumbailContainerStyle, textHeaderStyle
     } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbailContainerStyle}>
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={thumbailStyle}
                    />
                </View>

                <View style={textBlockStyle}>
                    <Text style={textHeaderStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image }}
                    style={imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    {'Buy album'}
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    textBlockStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    textHeaderStyle: {
        fontSize: 18
    },

    thumbailStyle: {
        width: 50,
        height: 50
    },

    thumbailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
