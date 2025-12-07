import { useState } from 'react'
import './Step2Connection.css'

function Step2Connection({ onNext }) {
    const [selected, setSelected] = useState(null)

    const options = [
        { id: 1, text: 'Lecturas, videos o predicaciones', image: '/step2-online.png' },
        { id: 2, text: 'Leyendo la Biblia / devocional', image: '/step2-study.png' },
        { id: 3, text: 'Cultos y reuniones', image: '/step2-church.png' },
        { id: 4, text: 'No estoy logrando conectarme con Dios', image: '/step2-prayer.png' }
    ]

    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => {
            onNext({ connection: option.text })
        }, 50)
    }

    return (
        <div className="step2-connection fade-in">
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: '9%' }}></div>
            </div>

            <div className="step-content">
                <p className="step-subtitle-green">Antes, queremos saber un poco más sobre ti.</p>
                <h2 className="step-title">¿Cuál es la forma en que más sueles conectarte con la Palabra de Dios?</h2>

                <div className="options-grid-2x2">
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className={`option-card-image ${selected === option.id ? 'selected' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            <div className="option-image-placeholder">
                                {option.image && <img src={option.image} alt={option.text} />}
                            </div>
                            <div className="option-text-container">
                                <div className="option-text">{option.text}</div>
                                <div className="option-arrow">›</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Step2Connection
