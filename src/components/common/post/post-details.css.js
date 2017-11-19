import { css } from 'glamor';

const postDetailsWrapperStyles = css ({
    width: '80%',
    padding: '10px',
    margin: '0 auto',
    '>h1': {
        marginBottom: 0
    },
    '>h1+span': {
        fontStyle: 'italic'
    },
    '> .post-body-text': {
        border: '1px solid #e2e2e2',
        padding: '10px'
    }
});

export {
    postDetailsWrapperStyles
}