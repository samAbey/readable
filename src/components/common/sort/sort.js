import React from 'react';

import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

export const SortByVotesUp = props => {
    return <div onClick={props.voteUp}><FaAngleUp /></div>
}
export const SortByVotesDown = props => {
    return <div onClick={props.voteDown}><FaAngleDown /></div>
}
export const SortByTimestampUp = props => {
    return <div onClick={props.timestampUp}><FaAngleUp /></div>
}
export const SortByTimestampDown = props => {
    return <div onClick={props.timestampDown}><FaAngleDown /></div>
}