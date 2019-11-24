import React, { Component } from 'react';
import NewsComponent from './NewsComponent';

export default class Entertainment extends Component {
    render() {
        return ( <
            NewsComponent heading = "Entertainment"
            newsURL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=e900b8e08ad3418d8270cdd9f177a374" /
            >
        );
    }
}