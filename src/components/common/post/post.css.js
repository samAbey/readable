import { css } from 'glamor';

const postStyles = css ({
    display: 'inline-block',
    width: '30%',
    border: '1px solid #e2e2e2',
    padding: '10px',
    margin: '10px',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    height: '400px',
    overflow: 'auto'
});

const postMetaStyles = css ( {
    '>p': {
        display: 'inline-block',
        margin: '0',
        marginRight: '5px',
        border: '1px solid #e2e2e2',
        padding: '3px',
        borderRadius: '3px',
        marginBottom: '3px',
        fontStyle: 'italic'
    }
});

export {
    postStyles,
    postMetaStyles
}