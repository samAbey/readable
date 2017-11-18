import React from 'react';

import { sortbarStyles } from './sortbar.css'

import { 
    SortByVotesUp, 
    SortByVotesDown,
    SortByTimestampUp,
    SortByTimestampDown } from '../sort/sort';

class SortBar extends React.Component {

    render () {
        return (
            <ul {...sortbarStyles}>
                <li><SortByVotesUp voteUp={this.props.voteUp} />Votes<SortByVotesDown voteDown={this.props.voteDown} /></li>
                <li><SortByTimestampUp timestampUp={this.props.timestampUp} />Time<SortByTimestampDown timestampDown={this.props.timestampDown} /></li>
            </ul>
        );
    }
}

export default SortBar;