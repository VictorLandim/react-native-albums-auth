import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { Spinner, CardSection } from './common';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [], loaded: false };
    }

    componentWillMount() {
        // https://jsonplaceholder.typicode.com/photos
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    albums: response.data,
                    loaded: true
                });
        });
    }

    renderAlbums() {
        switch (this.state.loaded) {
            case true:
                return this.state.albums.map((album) =>
                    <AlbumDetail
                        key={album.title}
                        album={album}
                    />
                );
                break;
            case false:
                return (
                    <CardSection>
                        <Spinner />
                    </CardSection>
                );
                break;
            default:
        }
    }

    render() {
        return (
                <ScrollView>
                    { this.renderAlbums() }
                    { this.props.children }
                </ScrollView>
        );
    }
}

export default AlbumList;
