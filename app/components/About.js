var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');
var styles = require('../styles');

var About = React.createClass({
    
    render: function () {
        return (
            <MainContainer>
                <h1>This is a React.js Tutorial</h1>
                <p>This is a tutorial project provided by Tyler McGinnis in his React.js Program</p>
                <a href="http://www.reactjsprogram.com/">See the program here.</a>
                <div className='col-sm-12' style={styles.space}>
                    <Link to='/playerOne'>
                        <button type='button' className='btn btn-lg btn-success'>Continue to Select Players</button>
                    </Link>
                </div>
                <div className='col-sm-12' style={styles.space}>
                    <Link to='/'>
                        <button type='button' className='btn btn-lg btn-danger'>Return to Start Page</button>
                    </Link>
                </div>
            </MainContainer>
            )
    }
    
});

module.exports = About;