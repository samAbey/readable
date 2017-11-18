import React from 'react';

import { 
    SortByVotesUp, 
    SortByVotesDown,
    SortByTimestampUp,
    SortByTimestampDown } from '../sort/sort';

class SortBar extends React.Component {

    render () {
        return (
            <ul>
                <li><SortByVotesUp voteUp={this.props.voteUp} />Votes<SortByVotesDown voteDown={this.props.voteDown} /></li>
                <li><SortByTimestampUp timestampUp={this.props.timestampUp} />Time<SortByTimestampDown timestampDown={this.props.timestampDown} /></li>
            </ul>
        );
    }
}

export default SortBar;