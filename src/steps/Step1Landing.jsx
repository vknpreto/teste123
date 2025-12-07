import './Step1Landing.css'

function Step1Landing({ onNext }) {
    return (
        <div className="step1-landing fade-in">
            <div className="landing-content">
                {/* TEXT FIRST, THEN IMAGE */}
                <h1 className="landing-title">¿Cuánto conoces la Palabra?</h1>

                <p className="landing-subtitle">
                    Haz este test rápido y descubre cuál es tu nivel de conocimiento sobre el libro sagrado.
                </p>

                <div className="incentive-box">
                    🎁 ¡Al final recibirás 3 premios!
                </div>

                {/* Scroll Illustration - NOW BELOW TEXT */}
                <div className="scroll-illustration">
                    <img src="/step1-scroll.png" alt="Pergamino Bíblico" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                <button className="btn btn-primary pulse" onClick={() => onNext({})}>
                    EMPEZAR EL TEST
                </button>
            </div>
        </div>
    )
}

export default Step1Landing
