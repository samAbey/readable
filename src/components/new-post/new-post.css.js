import { css } from 'glamor';

const newPostStyles = css({
    width: '60%',
    margin: '0 auto',
    textAlign: 'center',
    '> div > input, > div > textarea': {
        height: '40px',
        width: '400px',
        marginBottom: '10px',
        padding: '3px'
    }
});

export {
    newPostStyles
}