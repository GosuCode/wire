import './cat.scss'

const Cat = () => {
    return (
        <div>
            <div className="cat">
                <div className="ear ear--left"></div>
                <div className="ear ear--right"></div>
                <div className="face">
                    <div className="eye eye--left">
                        <div className="eye-pupil"></div>
                    </div>
                    <div className="eye eye--right">
                        <div className="eye-pupil"></div>
                    </div>
                    <div className="muzzle"></div>
                </div>
            </div>
        </div>
    )
}

export default Cat
