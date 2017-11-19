import { css } from 'glamor';

const newPostStyles = css({
    width: '60%',
    margin: '0 auto',
    textAlign: 'center',
    '> div > input, > div > textarea': {
        height: '40px',
        width: '400px',
        marginBottom: '10px',
        padding: '3px',
        border: '1px solid #e2e2e2'
    },
    '> div > select': {
        height: '40px',
        width: '410px',
        marginBottom: '10px',
        padding: '3px',
        borderRadius: 0,
        border: '1px solid #e2e2e2'
    }
});

export {
    newPostStyles
}