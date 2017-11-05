import { css } from 'glamor';

const navbarStyles = css({
        display: 'inline-block',
        width: '100%',
    }),
    listStyles = css({
        listStyle: 'none',
        textAlign: 'center',
        margin: 0,
        padding: 0,
        '>li': {
            display: 'inline-block',
            padding: '10px',
            cursor: 'pointer'
        }
    });


export {
    navbarStyles,
    listStyles
}