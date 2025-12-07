import { useState } from 'react'
import './App.css'

// Import all implemented steps
import Step1Landing from './steps/Step1Landing'
import Step2Connection from './steps/Step2Connection'
import { Step3Difficulty, Step4Feeling, Step5Challenges, Step6ReadAll, Step7Gender, Step8Age } from './steps/ProfileSteps'
import { Step9Transition, Step10QuizQ1, Step11QuizQ2, Step12QuizQ3, Step13QuizQ4, Step14QuizQ5, Step15QuizQ6, Step16QuizQ7, Step17QuizQ8, Step18QuizQ9, Step19QuizQ10 } from './steps/QuizSteps'
import { Step20Results, Step21VSL, Step23PreOfferQ1, Step24PreOfferQ2, Step25SalesPage } from './steps/FinalSteps'
import LoadingScreen from './steps/LoadingScreen'
import { ImagePreloader, QUIZ_IMAGES } from './ImagePreloader'

function App() {
    const [currentStep, setCurrentStep] = useState(1)
    const [answers, setAnswers] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [imagesPreloaded, setImagesPreloaded] = useState(false)

    const handleNext = (data) => {
        setAnswers(prev => ({ ...prev, ...data }))

        // Check if we are at the last question (Step 19)
        if (currentStep === 19) {
            setIsLoading(true)
            window.scrollTo(0, 0)
        } else {
            setCurrentStep(currentStep + 1)
            window.scrollTo(0, 0)
        }
    }

    const handleLoadingComplete = () => {
        setIsLoading(false)
        setCurrentStep(20)
        window.scrollTo(0, 0)
    }

    const renderStep = () => {
        if (isLoading) {
            return <LoadingScreen onComplete={handleLoadingComplete} />
        }

        switch (currentStep) {
            case 1: return <Step1Landing onNext={handleNext} />
            case 2: return <Step2Connection onNext={handleNext} />
            case 3: return <Step3Difficulty onNext={handleNext} />
            case 4: return <Step4Feeling onNext={handleNext} />
            case 5: return <Step5Challenges onNext={handleNext} />
            case 6: return <Step6ReadAll onNext={handleNext} />
            case 7: return <Step7Gender onNext={handleNext} />
            case 8: return <Step8Age onNext={handleNext} />
            case 9: return <Step9Transition onNext={handleNext} />
            case 10: return <Step10QuizQ1 onNext={handleNext} />
            case 11: return <Step11QuizQ2 onNext={handleNext} />
            case 12: return <Step12QuizQ3 onNext={handleNext} />
            case 13: return <Step13QuizQ4 onNext={handleNext} />
            case 14: return <Step14QuizQ5 onNext={handleNext} />
            case 15: return <Step15QuizQ6 onNext={handleNext} />
            case 16: return <Step16QuizQ7 onNext={handleNext} />
            case 17: return <Step17QuizQ8 onNext={handleNext} />
            case 18: return <Step18QuizQ9 onNext={handleNext} />
            case 19: return <Step19QuizQ10 onNext={handleNext} />
            case 20: return <Step20Results onNext={handleNext} answers={answers} />
            case 21: return <Step21VSL onNext={handleNext} />
            case 22: return <Step23PreOfferQ1 onNext={handleNext} />
            case 23: return <Step24PreOfferQ2 onNext={handleNext} />
            case 24: return <Step25SalesPage />
            default: return <Step1Landing onNext={handleNext} />
        }
    }

    return (
        <div className="app">
            {/* Preload all images on mount */}
            <ImagePreloader images={QUIZ_IMAGES} onComplete={() => setImagesPreloaded(true)} />

            {/* Hide progress bar for steps 20+ */}
            {currentStep < 20 && !isLoading && (
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(currentStep / 19) * 100}%` }}></div>
                </div>
            )}

            {renderStep()}
        </div>
    )
}

export default App
