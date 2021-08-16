import {React , useState, useEffect} from 'react'

const Resize = () => {
    const [widthScreen, setwidthScreen] = useState(window.innerWidth)
    const isMobile = widthScreen<768
    useEffect(() => {
        const handleResize = ()=>{setwidthScreen(window.innerWidth)}
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return (
        <div>
            <h1>Width Screen {widthScreen}</h1>
            {isMobile && <h3>Sólo si es Mobile</h3>}
        </div>
    )
}

export default Resize
