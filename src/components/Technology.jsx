import React, { Component } from 'react';
import NewsComponent from './NewsComponent';

export default class Technology extends Component {
    render() {
        return ( <
            NewsComponent heading = "Technology"
            newsURL = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e900b8e08ad3418d8270cdd9f177a374" /
            >
        );
    }
}