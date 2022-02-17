const style = {
  fontFamily: 'ColfaxAI',
  width: '100%',
  height: '100%',
  '& .header': {
    backgroundColor: 'white',
    height: '3.104rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .nav': {
      width: '93.3333333333%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      '& .header-icon': {
        width: '1.375rem',
        height: '1.375rem',
        '&:hover': {
          cursor: 'pointer'
        }
      },
      '& .chat-href': {
        textDecoration: 'none',
        fontFamily: 'ColfaxAI',
        fontSize: '0.9rem',
        letterSpacing: '0.05em',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'inherit',
        marginLeft: 'auto',
        marginRight: '10rem'
      }
    }
  },
  '& .intro': {
    backgroundColor: 'rgba(246, 246, 246, 1)',
    width: '100%',
    height: 'calc(100% - 3.104rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& .title': {
      color: '#191927',
      fontSize: '50px',
      lineHeight: '53px',
      fontFamily: 'Charter',
      marginBottom: '1.4rem'
    },
    '& .subtitle': {
      fontFamily: 'ColfaxAI',
      fontSize: '20px',
      lineHeight: '26px',
      color: '#191927',
      marginBottom: '1.4rem'
    },
    '& .chat-button': {
      fontFamily: 'ColfaxAI',
      fontSize: '0.9rem',
      letterSpacing: '0.05em',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: 'rgba(246, 246, 246, 1)',
      backgroundColor: '#191927',
      padding: '0.7em 1.333333em 0.6em',
      borderRadius: '3em',
      border: 'none',
      '&:hover': {
        backgroundColor: '#353541',
        cursor: 'pointer'  
      }
    }
  }
}

export default style