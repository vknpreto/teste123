import { useEffect, useState } from 'react'

export function ImagePreloader({ images, onComplete }) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!images || images.length === 0) {
            onComplete()
            return
        }

        let loadedCount = 0
        const totalImages = images.length

        const imagePromises = images.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                img.onload = () => {
                    loadedCount++
                    resolve()
                }
                img.onerror = () => {
                    loadedCount++
                    resolve() // Continue mesmo se falhar
                }
                img.src = src
            })
        })

        Promise.all(imagePromises).then(() => {
            setLoaded(true)
            onComplete()
        })
    }, [images, onComplete])

    return null
}

export const QUIZ_IMAGES = [
    '/step10-characters.png',
    '/step10-character1.png',
    '/step10-character2.png',
    '/step10-character3.png',
    '/step10-character4.png',
    '/step11-nativity.png',
    '/step12-battle1.png',
    '/step12-battle2.png',
    '/step12-battle3.png',
    '/step12-battle4.png',
    '/step13-jericho.png',
    '/step14-rainbow.png',
    '/step15-prophets.png',
    '/step16-kings.png',
    '/step17-martyrs.png',
    '/author-photo.png',
    '/testimonial_maria.png',
    '/testimonial_carlos.png',
    '/testimonial_lucia.png',
    '/testimonial_juan.png',
    '/testimonial_sofia.png',
    '/whatsapp-icon.png',
    '/guarantee-badge.png',
    '/payment-info.png'
]
