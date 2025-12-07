import { useEffect, useState } from 'react'
import './LoadingScreen.css'

function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(onComplete, 500) // Wait a bit before finishing
                    return 100
                }
                return prev + 1
            })
        }, 30) // 3 seconds total (approx)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className="loading-screen fade-in">
            <div className="progress-bar"><div className="progress-fill" style={{ width: '100%' }}></div></div>
            <div className="loading-content">
                <div className="loading-image-placeholder">
                    <img src="/loading-bible.png" alt="Bíblia" />
                </div>

                <div className="loading-progress-container">
                    <div className="loading-text">Analizando tus respuestas...</div>
                    <div className="loading-percentage">{progress}%</div>
                </div>

                <div className="loading-bar-bg">
                    <div className="loading-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
