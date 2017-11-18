import React from 'react';

import { SortByVotesUp, SortByVotesDown } from '../sort/sort';

class SortBar extends React.Component {

    render () {
        return (
            <ul>
                <li><SortByVotesUp voteUp={this.props.voteUp} />Votes<SortByVotesDown voteDown={this.props.voteDown} /></li>
            </ul>
        );
    }
}

export default SortBar;