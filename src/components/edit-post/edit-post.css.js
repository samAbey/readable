import { css } from 'glamor';

const editPostWrapperStyles = css ({
    width: '600px',
    margin: '0 auto',
    marginTop: '50px',
    '> div > input': {
        width: '100%',
        height: '30px',
        padding: '0 10px',
        marginBottom: '10px'
    },
    '> div > textarea': {
        width: '100%',
        height: '60px',
        padding: '0 10px',
        border: '1px solid #e2e2e2'
    },
    '> .edit-post-link-wrapper': {
        textAlign: 'right',
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
    editPostWrapperStyles
}