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
        marginRight: '10rem',
        opacity: '0.5',
        cursor: 'null',

      }
    }
  },
  '& .content': {
    backgroundColor: 'rgba(246, 246, 246, 1)',
    width: '100%',
    height: 'calc(100% - 3.104rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& .chat-box': {
      backgroundColor: 'white',
      width: '20rem',
      height: '27.5rem',
      borderRadius: '1rem',
      boxShadow: '0 0 10px rgb(5 5 5 / 35%)',
      display: 'flex',
      flexDirection: 'column',
      '& .chat-info': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '4rem',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        '& .bot-icon': {
          width: '1.375rem',
          height: '1.375rem',
          marginLeft: '1rem',
          marginRight: '0.5rem'
        },
        '& .bot-info': {
          '& .bot-name': {
            fontWeight: '600',
            fontSize: '1rem',
          },
          '& .powered-by': {
            fontSize: '0.8rem',
            color: '#8A8A8A'
          }
        }
      },
      '& .chat-messages': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.5rem 0',
        overflowY: 'scroll',
        '& .chat-message': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '70%',
          margin: '0.5rem 0',
          borderRadius: '0.5rem',
          fontSize: '0.85rem',
          fontFamily: '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
          padding: '0.5rem 0.75rem',
          resize: 'none',
          '&:focus': {
            outline: 'none'
          },
        },
        '& .user': {
          marginLeft: 'auto',
          marginRight: '0.75rem',
          color: 'white',
          backgroundColor: '#1D1D25',
        },
        '& .ai': {
          marginRight: 'auto',
          marginLeft: '0.75rem',
          color: '#3A3B3C',
          backgroundColor: '#E4E6EB'
        },
      },
      '& .input-section': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '3rem',
        marginTop: 'auto',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
        '& .chat-input': {
          width: 'calc(100% - 3rem)',
          boxSizing: 'border-box',
          paddingLeft: '1rem',
          border: 'none',
          borderRadius: '0 0 0 1rem',
          fontSize: '0.85rem',
          fontFamily: '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
          resize: 'none',
          cursor: 'auto',
          '&:focus': {
            outline: 'none'
          },
        },
        '& .send-button-container': {
          width: '3rem',
          height: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
          '& .send-button': {
            '& .send-icon': {
              color: 'red'
            }
          }
        }
      }
    }
  }
}

export default style