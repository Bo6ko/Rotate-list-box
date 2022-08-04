const HomeCss = ((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        textAlign: 'center',
    },
    listBox: {
        background: 'gray',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        margin: '0 auto',
        marginTop: '15px',

        '& .listitem': {
            background: '#fff',
            margin: '10px 0',
            borderRadius: '5px',
            textAlign: 'center',
            padding: '10px'
        }
    },
    searchBtn: {
        width: '300px',
        display: 'block',
        margin: '0 auto',
        padding: '7px',
        borderRadius: '5px',
        border: '1px solid',
        marginTop: '30px'
    }
}));

export default HomeCss;