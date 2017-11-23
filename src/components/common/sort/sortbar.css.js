import { css } from 'glamor';

const sortbarStyles = css({
    listStyle: 'none',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    '>li': {
        display: 'inline-block',
        fontSize: '16px',
        padding: '0 20px',
        cursor: 'pointer'
    },
    '>li>i': {
        padding: '10px'
    }
});

export {
    sortbarStyles
}