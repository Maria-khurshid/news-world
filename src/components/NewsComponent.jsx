import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';

class NewsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		};
	}

	componentDidMount() {
		fetch(this.props.newsURL)
			.then(response => response.json())
			.then(data => {
				this.setState({
					articles: data.articles, // Prints result from `response.json()` in getRequest
				});
			});
	}

	render() {
		console.log(this.state);
		return (
			<Figure className="technology">
				<h1>{this.props.heading}</h1>
				{this.state.articles.map(item => {
					return (
						<FigureCaption className="figcaption-bdr">
							<h2>{item.title}</h2>
							<FigureImage width={171} height={380} alt="article image" src={item.urlToImage} />
							<a href={item.url}>Read More</a>
							<p>{item.description}</p>
							<p>{item.content}</p>
							<p>{item.publishedAt}</p>
							<b>{item.author}</b>
						</FigureCaption>
					);
				})}
			</Figure>
		);
	}
}

NewsComponent.propTypes = {
	newsURL: PropTypes.string,
	heading: PropTypes.string,
};

export default NewsComponent;
