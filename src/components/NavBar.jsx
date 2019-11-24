import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">NEWS*WORLD</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<BrowserRouter className="mr-auto">
					<Nav.Link href="https://github.com/Maria-khurshid">Github-link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<Route>
							<NavDropdown.Item>
								<Link to="/home">Home</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/Pakistan">Pakistan</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/Entertainment">Entertainment</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/Sports">Sports</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/Technology">Technology</Link>
							</NavDropdown.Item>
						</Route>
					</NavDropdown>
				</BrowserRouter>
			</Navbar.Collapse>
		</Navbar>
	);
}
