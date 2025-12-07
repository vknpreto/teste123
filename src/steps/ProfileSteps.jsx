// Steps 3-8 with exact specifications
import { useState } from 'react'
import './SharedStyles.css'

export function Step3Difficulty({ onNext }) {
    const [selected, setSelected] = useState(null)

    const options = [
        { id: 1, text: 'Antiguo Testamento', image: '/step3-old-testament.png' },
        { id: 2, text: 'Nuevo Testamento', image: '/step3-new-testament.png' }
    ]

    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ difficulty: option.text }), 50)
    }

    return (
        <div className="step-container fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '18%' }}></div></div>
            <div className="step-content">
                <div className="main-image-placeholder">
                    <img src="/step3-difficulty.png" alt="Dificultad" />
                </div>
                <h2 className="step-title">¿Qué parte de la Biblia te resulta difícil de entender?</h2>
                <div className="options-list">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-icon ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
                            {option.image && (
                                <div className="option-icon-image">
                                    <img src={option.image} alt={option.text} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                                </div>
                            )}
                            <span className="option-text-icon">{option.text}</span>
                            <span className="option-arrow">›</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Step4Feeling({ onNext }) {
    const [selected, setSelected] = useState(null)

    const options = [
        { id: 1, text: 'Ya lo intenté varias veces y me rendí', image: '/step4-frustrated.png' },
        { id: 2, text: 'Intento pero no lo consigo de ninguna manera', image: '/step4-trying.png' },
        { id: 3, text: 'A veces confundido/a, pero la entiendo.', image: '/step4-confused.png' },
        { id: 4, text: 'Tranquilo/a, pero siento que puedo mejorar', image: '/step4-calm.png' }
    ]

    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ feeling: option.text }), 50)
    }

    return (
        <div className="step-container fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '27%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Cómo te sientes al intentar entender la Biblia en su totalidad?</h2>
                <div className="options-grid-2x2">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-image ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
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

export function Step5Challenges({ onNext }) {
    const [selected, setSelected] = useState([])

    const options = [
        'No sé por dónde empezar',
        'Tengo dificultad para entender',
        'Falta de planificación y organización',
        'Siento que la lectura lleva mucho tiempo',
        'Siento la falta de un material que me ayude en la lectura'
    ]

    const toggleOption = (option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter(item => item !== option))
        } else {
            setSelected([...selected, option])
        }
    }

    return (
        <div className="step-container fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '36%' }}></div></div>
            <div className="step-content">
                <div className="main-image-placeholder">
                    <img src="/step5-challenges.png" alt="Desafíos" />
                </div>
                <h2 className="step-title">¿Cuál es el mayor desafío que enfrentas cuando intentas leer la Biblia?</h2>
                <p className="step-subtitle-gray">(Puedes seleccionar más de uno si es el caso)</p>
                <div className="checkbox-list">
                    {options.map((option, index) => (
                        <div key={index} className={`checkbox-item ${selected.includes(option) ? 'selected' : ''}`} onClick={() => toggleOption(option)}>
                            <span className="checkbox-text">{option}</span>
                            <div className="checkbox-box">{selected.includes(option) && '✓'}</div>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    <button className="btn btn-primary" onClick={() => onNext({ challenges: selected })} disabled={selected.length === 0} style={{ opacity: selected.length === 0 ? 0.5 : 1 }}>CONTINUAR</button>
                </div>
            </div>
        </div>
    )
}

export function Step6ReadAll({ onNext }) {
    const [selected, setSelected] = useState(null)

    const options = [
        { id: 1, text: 'Sí, ya lo logré' },
        { id: 2, text: 'No, todavía no lo logré' }
    ]

    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ readAll: option.text }), 50)
    }

    return (
        <div className="step-container fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '45%' }}></div></div>
            <div className="step-content">
                <div className="main-image-placeholder">
                    <img src="/step6-readall.png" alt="Leer toda la Biblia" />
                </div>
                <h2 className="step-title">¿Has logrado leer toda la Biblia?</h2>
                <div className="options-list">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-icon ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
                            <span className="option-text-icon">{option.text}</span>
                            <span className="option-arrow">›</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Step7Gender({ onNext }) {
    const [selected, setSelected] = useState(null)

    const options = [
        { id: 1, text: 'Cristiano', image: '/step7-man.png' },
        { id: 2, text: 'Cristiana', image: '/step7-woman.png' }
    ]

    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ gender: option.text }), 50)
    }

    return (
        <div className="step-container fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '54%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">Usted es:</h2>
                <div className="options-grid-1x2">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-image ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
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

export function Step8Age({ onNext }) {
    const [selected, setSelected] = useState(null)

    const options = [
        { id: 1, text: '18 a 34', image: '/step8-age1.png' },
        { id: 2, text: '35 a 44', image: '/step8-age2.png' },
        { id: 3, text: '45 a 54', image: '/step8-age3.png' },
        { id: 4, text: '55+', image: '/step8-age4.png' }
    ]

    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ age: option.text }), 50)
    }

    return (
        <div className="step-container fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '63%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Cuál es su edad?</h2>
                <div className="options-grid-2x2">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-image ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
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
