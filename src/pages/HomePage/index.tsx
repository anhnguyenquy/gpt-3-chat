import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { ReactComponent as OpenAI } from '../../core/media/icons/openai.svg'
import style from './style'

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <Box sx={style}>
      <header className='header'>
        <nav className='nav'>
          <OpenAI className='header-icon' onClick={() => { navigate('/')}} />
          <a href='/chat' className='chat-href' aria-disabled>Chat</a>
        </nav>
      </header>
      <div className='intro'>
        <div className='title'>Chat with OpenAI's powerful GPT-3</div>
        <div className='subtitle'>Just click the button below to start the chat</div>
        <button className='chat-button' onClick={() => { navigate('/chat')}}>Start Chatting</button>
      </div>
    </Box>
  )
}