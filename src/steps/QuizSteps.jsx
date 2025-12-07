// Steps 9-19: Transition + Quiz Questions
import { useState } from 'react'
import './QuizSteps.css'

export function Step9Transition({ onNext }) {
    return (
        <div className="transition-screen fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '72%' }}></div></div>
            <div className="transition-content">
                <h1 className="transition-title">¡Ahora pongamos a prueba tu conocimiento sobre la Palabra de Dios!</h1>
                <p className="transition-subtitle">Responde las siguientes preguntas.</p>
                <div className="transition-illustration">
                    <img src="/step9-transition.png" alt="Transición" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <button className="btn btn-primary pulse" onClick={() => onNext({})}>COMENZAR</button>
            </div>
        </div>
    )
}

export function Step10QuizQ1({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'Josué', image: '/step10-q1-1.png' },
        { id: 2, text: 'Moisés', image: '/step10-q1-2.png' },
        { id: 3, text: 'David', correct: true, image: '/step10-q1-3.png' },
        { id: 4, text: 'Sansón', image: '/step10-q1-4.png' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q1: option.text, q1Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '77%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Quién derrotó a un gigante usando una honda y una piedra?</h2>
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

export function Step11QuizQ2({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'La Transfiguración' },
        { id: 2, text: 'La Natividad', correct: true },
        { id: 3, text: 'La Anunciación' },
        { id: 4, text: 'La Última Cena' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q2: option.text, q2Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '81%' }}></div></div>
            <div className="step-content">
                <div className="main-image-placeholder">
                    <img src="/step11-nativity.png" alt="Natividad" />
                </div>
                <h2 className="step-title">¿Qué escena muestra a María, José y un bebé en un pesebre?</h2>
                <div className="options-list">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-text ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
                            <span className="option-text-quiz">{option.text}</span>
                            <span className="option-arrow">›</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Step12QuizQ3({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'La rebelión de Absalón', image: '/step12-battle1.png' },
        { id: 2, text: 'La batalla de Jericó', image: '/step12-battle2.png' },
        { id: 3, text: 'La conquista de Canaán', image: '/step12-battle3.png' },
        { id: 4, text: 'La batalla de Madián', correct: true, image: '/step12-battle4.png' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q3: option.text, q3Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '86%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Qué batalla fue ganada por 300 hombres usando trompetas y antorchas?</h2>
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

export function Step13QuizQ4({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'La fundación de Jerusalén' },
        { id: 2, text: 'La destrucción de Sodoma' },
        { id: 3, text: 'La caída de Babilonia' },
        { id: 4, text: 'La batalla de Jericó', correct: true }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q4: option.text, q4Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '90%' }}></div></div>
            <div className="step-content">
                <div className="main-image-placeholder">
                    <img src="/step13-jericho.png" alt="Jericó" />
                </div>
                <h2 className="step-title">¿Qué evento muestra los muros de una ciudad cayendo tras siete días de marcha?</h2>
                <div className="options-list">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-text ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
                            <span className="option-text-quiz">{option.text}</span>
                            <span className="option-arrow">›</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Step14QuizQ5({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'El éxodo de Egipto' },
        { id: 2, text: 'La creación' },
        { id: 3, text: 'La venida de Jesús' },
        { id: 4, text: 'El Pacto con Noé', correct: true }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q5: option.text, q5Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '93%' }}></div></div>
            <div className="step-content">
                <div className="main-image-placeholder">
                    <img src="/step14-rainbow.png" alt="Arcoíris" />
                </div>
                <h2 className="step-title">¿Qué promesa de Dios se simboliza con un arcoíris en el cielo?</h2>
                <div className="options-list">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-text ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
                            <span className="option-text-quiz">{option.text}</span>
                            <span className="option-arrow">›</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Step15QuizQ6({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'Elías', correct: true, image: '/step15-prophet1.png' },
        { id: 2, text: 'Ezequiel', image: '/step15-prophet2.png' },
        { id: 3, text: 'Jeremías', image: '/step15-prophet3.png' },
        { id: 4, text: 'Isaías', image: '/step15-prophet4.png' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q6: option.text, q6Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '95%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Qué profeta subió al cielo en un carro de fuego?</h2>
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

export function Step16QuizQ7({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'Oseas', image: '/step16-prophet1.png' },
        { id: 2, text: 'Ezequiel', correct: true, image: '/step16-prophet2.png' },
        { id: 3, text: 'Daniel', image: '/step16-prophet3.png' },
        { id: 4, text: 'Isaías', image: '/step16-prophet4.png' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q7: option.text, q7Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '96%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Qué profeta tuvo la visión de un valle de huesos secos que revivían?</h2>
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

export function Step17QuizQ8({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'Josías', image: '/step17-king1.png' },
        { id: 2, text: 'Manasés', image: '/step17-king2.png' },
        { id: 3, text: 'Sedequías', image: '/step17-king3.png' },
        { id: 4, text: 'Joaquim', correct: true, image: '/step17-king4.png' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q8: option.text, q8Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '97%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Qué rey quemó un rollo con la profecía de Jeremías?</h2>
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

export function Step18QuizQ9({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'José', correct: true },
        { id: 2, text: 'Eliseo' },
        { id: 3, text: 'Moisés' },
        { id: 4, text: 'Daniel' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q9: option.text, q9Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '98%' }}></div></div>
            <div className="step-content">
                <div className="main-image-placeholder">
                    <img src="/step18-jose.png" alt="José" />
                </div>
                <h2 className="step-title">¿Qué personaje es conocido por su túnica de colores y por interpretar los sueños del faraón?</h2>
                <div className="options-list">
                    {options.map((option) => (
                        <div key={option.id} className={`option-card-text ${selected === option.id ? 'selected' : ''}`} onClick={() => handleSelect(option)}>
                            <span className="option-text-quiz">{option.text}</span>
                            <span className="option-arrow">›</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Step19QuizQ10({ onNext }) {
    const [selected, setSelected] = useState(null)
    const options = [
        { id: 1, text: 'La decapitación de Juan el Bautista', image: '/step19-martyr1.png' },
        { id: 2, text: 'El apedreamiento de Esteban', correct: true, image: '/step19-martyr2.png' },
        { id: 3, text: 'La muerte de Jacobo', image: '/step19-martyr3.png' },
        { id: 4, text: 'La muerte de Pedro', image: '/step19-martyr4.png' }
    ]
    const handleSelect = (option) => {
        setSelected(option.id)
        setTimeout(() => onNext({ q10: option.text, q10Correct: option.correct }), 50)
    }
    return (
        <div className="quiz-step fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '99%' }}></div></div>
            <div className="step-content">
                <h2 className="step-title">¿Cuál fue el martirio del primer cristiano en el libro de los Hechos?</h2>
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
