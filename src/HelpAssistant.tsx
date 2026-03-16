import { useEffect, useRef, useState } from 'react'
import './HelpAssistant.css'

type HelpAssistantProps = {
  onGoToServices: () => void
  onGoToContact: () => void
}

type Message = {
  id: number
  role: 'bot' | 'user'
  text: string
}

const initialBotMessage =
  'Hola, soy tu asistente virtual. En que puedo ayudarte hoy? Puedes preguntarme por servicios, presupuesto, contacto o trabajos.'

const quickOptions = ['Quiero ver servicios', 'Necesito presupuesto', 'Quiero contactar', 'Ver trabajos']

function buildBotReply(message: string) {
  const normalizedMessage = message.toLowerCase()

  if (
    normalizedMessage.includes('presupuesto') ||
    normalizedMessage.includes('precio') ||
    normalizedMessage.includes('coste') ||
    normalizedMessage.includes('cuanto')
  ) {
    return {
      text: 'Podemos prepararte un presupuesto sin compromiso. Si quieres, te llevo a la zona de contacto o puedes escribirnos por WhatsApp para responderte mas rapido.',
      action: 'contact' as const,
    }
  }

  if (
    normalizedMessage.includes('servicio') ||
    normalizedMessage.includes('rotulo') ||
    normalizedMessage.includes('rotulacion') ||
    normalizedMessage.includes('impresion') ||
    normalizedMessage.includes('diseno')
  ) {
    return {
      text: 'Te ayudo con eso. Tenemos soluciones de rotulacion, impresion y diseno para negocios. Te llevo a la seccion de servicios para que lo veas mejor.',
      action: 'services' as const,
    }
  }

  if (
    normalizedMessage.includes('contacto') ||
    normalizedMessage.includes('llamar') ||
    normalizedMessage.includes('telefono') ||
    normalizedMessage.includes('email') ||
    normalizedMessage.includes('correo')
  ) {
    return {
      text: 'Perfecto. Puedes contactar con nosotros desde el formulario o por WhatsApp. Te abro la seccion de contacto.',
      action: 'contact' as const,
    }
  }

  if (
    normalizedMessage.includes('trabajo') ||
    normalizedMessage.includes('proyecto') ||
    normalizedMessage.includes('ejemplo') ||
    normalizedMessage.includes('portfolio')
  ) {
    return {
      text: 'Si quieres ver ejemplos de lo que hacemos, pulsa en Trabajos en el menu superior. Tambien puedo ayudarte a pedir presupuesto si ya sabes lo que necesitas.',
      action: 'none' as const,
    }
  }

  return {
    text: 'Puedo ayudarte con servicios, presupuesto, contacto o ejemplos de trabajos. Si quieres, escribe lo que necesitas y te guio enseguida.',
    action: 'none' as const,
  }
}

function HelpAssistant({ onGoToServices, onGoToContact }: HelpAssistantProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const messageIdRef = useRef(0)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 900)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      messageIdRef.current += 1
      setMessages([
        {
          id: messageIdRef.current,
          role: 'bot',
          text: initialBotMessage,
        },
      ])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleBotAction = (action: 'services' | 'contact' | 'none') => {
    if (action === 'services') {
      onGoToServices()
    } else if (action === 'contact') {
      onGoToContact()
    }
  }

  const sendMessage = (message: string) => {
    const trimmedMessage = message.trim()
    if (!trimmedMessage) return

    messageIdRef.current += 1
    const userMessage: Message = {
      id: messageIdRef.current,
      role: 'user',
      text: trimmedMessage,
    }

    const reply = buildBotReply(trimmedMessage)

    setMessages((current) => [...current, userMessage])
    setInputValue('')

    window.setTimeout(() => {
      messageIdRef.current += 1
      setMessages((current) => [
        ...current,
        {
          id: messageIdRef.current,
          role: 'bot',
          text: reply.text,
        },
      ])
      handleBotAction(reply.action)
    }, 450)
  }

  return (
    <div className={`help-assistant ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="help-assistant-panel" role="dialog" aria-label="Chat de ayuda">
          <div className="help-assistant-header">
            <div className="help-assistant-robot" aria-hidden="true">
              ?
            </div>
            <div>
              <p className="help-assistant-kicker">Robot asistente</p>
              <h2>Chat de ayuda</h2>
            </div>
          </div>

          <div className="help-assistant-messages" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`help-assistant-message help-assistant-message-${message.role}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="help-assistant-quick-actions">
            {quickOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="help-assistant-chip"
                onClick={() => sendMessage(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <form
            className="help-assistant-form"
            onSubmit={(event) => {
              event.preventDefault()
              sendMessage(inputValue)
            }}
          >
            <input
              type="text"
              className="help-assistant-input"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Escribe tu consulta..."
              aria-label="Escribe tu consulta"
            />
            <button type="submit" className="help-assistant-send">
              Enviar
            </button>
          </form>

          <div className="help-assistant-actions">
            <button type="button" className="help-assistant-button primary" onClick={onGoToServices}>
              Servicios
            </button>
            <button type="button" className="help-assistant-button secondary" onClick={onGoToContact}>
              Contacto
            </button>
            <a
              href="https://wa.me/34633833407"
              target="_blank"
              rel="noopener noreferrer"
              className="help-assistant-button whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className="help-assistant-toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar chat de ayuda' : 'Abrir chat de ayuda'}
      >
        <span className="help-assistant-toggle-icon">?</span>
      </button>
    </div>
  )
}

export default HelpAssistant
