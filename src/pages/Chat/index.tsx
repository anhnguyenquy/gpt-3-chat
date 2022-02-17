import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton } from '@mui/material'
import TextareaAutosize from 'react-textarea-autosize'
import openai from '../../openai'
import { ReactComponent as OpenAI } from '../../core/media/icons/openai.svg'
import { Send } from '../../core/media/icons/Send'
import style from './style'
import { cp } from 'fs/promises'

interface Message {
  text: string
  sender: 'user' | 'ai'
}

interface FetchedData {
  text: string
}

export const Chat = (): JSX.Element => {
  const navigate = useNavigate()

  const [userInput, setUserInput] = useState('')
  const [prompt, setPrompt] = useState('Start a completely new conversation.\n\n')
  const [messages, setMessages] = useState<Message[]>([])
  const [fetchedData, setFetchedData] = useState<FetchedData | null>()
  const [fetching, setFetching] = useState(false)
  const submit = async () => {
    setMessages(prev => [...prev, { text: userInput, sender: 'user' }])
    setPrompt(prev => prev + 'Human: ' + userInput + '\n' + 'AI: ')
    setUserInput('')
    setFetching(true)
  }
  useEffect(() => {
    if (fetching) {
      const fetchData = async () => {
        const response = await fetch('https://gpt-3-chat-backend.herokuapp.com/chat', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Host': 'https://gpt-3-chat.netlify.app/',
            'Origin': 'https://gpt-3-chat-backend.herokuapp.com'
          },
          body: JSON.stringify({
            prompt: prompt
          })
        })
        const data = await response.json()
        console.log(data)
        setFetchedData(data)
      }
      fetchData()
      return (() => {
        setFetchedData(null)
      })
    }
  }, [fetching])
  useEffect(() => {
    if (fetchedData) {
      const txt = fetchedData.text.trim()
      let sentences = txt.split('\n')
      sentences = sentences.filter(sentence => sentence)
      sentences.forEach(sentence => {
        setMessages(prev => [...prev, { text: sentence, sender: 'ai' }])
      })
      setPrompt(prev => prev + txt + '\n')
      setFetching(false)
    }
  }, [fetchedData])

  const messagesRef = useRef(null)
  const [sendButtonColor, setSendButtonColor] = useState('#8A8A8A')
  const [inputSectionStyle, setInputSectionStyle] = useState({})
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useLayoutEffect(() => {
    inputRef.current &&
      setInputSectionStyle({
        height: `${inputRef.current.clientHeight / 16 + 3}rem`
      })
  }, [userInput])
  useEffect(() => {
    if (messagesRef) {
      messagesRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' })
      })
    }
  }, [])

  return (
    <Box sx={style}>
      <header className='header'>
        <nav className='nav'>
          <OpenAI className='header-icon' onClick={() => { navigate('/') }} />
          <a href='/chat' className='chat-href'>Chat</a>
        </nav>
      </header>
      <div className='content'>
        <div className='chat-box'>
          <div className='chat-info'>
            <OpenAI className='bot-icon' />
            <div className='bot-info'>
              <div className='bot-name'>GPT-3</div>
              <div className='powered-by'>Powered by OpenAI</div>
            </div>
          </div>
          <div className='chat-messages' ref={messagesRef}>
            {messages.map((message, index) => {
              return (
                <div
                  key={index}
                  className={`chat-message ${message.sender}`}
                >
                  {message.text}
                </div>
              )
            })}
          </div>
          <div className='input-section' style={inputSectionStyle}>
            <TextareaAutosize className='chat-input'
              onChange={(e) => { setUserInput(e.currentTarget.value) }}
              onKeyDown={(e) => {
                if (e.key == 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  submit()
                }
              }}
              ref={inputRef}
              spellCheck={false}
              placeholder='Aa'
              maxRows={5}
              value={userInput}
            />
            <div className='send-button-container'>
              <IconButton className='send-button' onClick={submit} onMouseOver={() => { setSendButtonColor('#353541') }} onMouseOut={() => { setSendButtonColor('#8A8A8A') }}>
                <Send color={sendButtonColor} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}