/**
 * Class Header
 * @class Header
 * @classdesc Represent the map component
 * @extends Component
 * @author clenon <code@carloslenon.com>
 * 
 */
//core dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles, Avatar } from '@material-ui/core';

const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

class Header extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {

		const { classes } = this.props;
		return (
			<div>
				<AppBar position="static">
					<Toolbar>						
						<Typography variant="title" color="inherit" className={classes.flex}>
							WeTempo
						</Typography>
						<Avatar alt="Carlos Lenon" src="https://avatars0.githubusercontent.com/u/4239218?s=460&v=4" className={classes.avatar} />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Header);

