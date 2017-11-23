import { css } from 'glamor';

const commentStyles = css ({
    paddingLeft: '0',
    '> li': {
        border: '1px solid #e2e2e2',
        padding: '10px',
        display: 'inline-block',
        width: '400px',
        margin: '10px'
    },
    '> li > .comment-author': {
        fontStyle: 'italic',
        marginBottom: '10px',
        display: 'inline-block'
    },
    '> li > .comment-body': {
        marginBottom: '5px'
    },
    '> li .comment-controls': {
        '> a': {
            padding: '5px',
            display: 'inline-block',
            marginBottom: '5px',
            ':first-of-type': {
                paddingLeft: 0
            }
        }
    }
});

export {
    commentStyles
}