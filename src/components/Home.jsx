import React, { Component } from 'react';
import NewsComponent from './NewsComponent';

export default class Home extends Component {
	render() {
		return (
			<NewsComponent
				heading="WORLD NEWS"
				newsURL="https://newsapi.org/v2/top-headlines?country=us&apiKey=e900b8e08ad3418d8270cdd9f177a374"
			/>
		);
	}
}
