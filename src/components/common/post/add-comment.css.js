import { css } from 'glamor';

const commentsWrapperStyles = css({
    '> div > input': {
        border: '1px solid #e2e2e2',
        padding: '3px',
        margin: '3px'
    },
    '> div > a': {
        color: '#ffffff',
        background: '#3b7cb5',
        textDecoration: 'none',
        borderRadius: '3px',
        padding: '0 3px',
        margin: '3px',
        display: 'inline-block'
    }
});

export {
    commentsWrapperStyles
}