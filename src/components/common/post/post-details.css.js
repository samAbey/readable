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
    },
    '> .post-controls': {
        '> a': {
            display: 'inline-block',
            color: '#fff',
            padding: '10px 20px',
            background: '#5889d2',
            margin: '5px',
            marginTop: '40px',
            textDecoration: 'none'
        }
    }
});

export {
    postDetailsWrapperStyles
}