import React from 'react'
import "./Demo.scss"


function Demo() {
    return (
        <>

            <div>
                <input type="checkbox" id="card-toggle" aria-label="Open the card" />
                <label className="card" htmlFor="card-toggle">
                    <div className="card-face front-flap outside">
                        <div className="card-face-content">
                            <span className="card-text">Hope you have...</span>
                        </div>
                    </div>
                    <div className="card-face front-flap inside">
                    </div>
                    <div className="card-face back-flap inside">
                        <div className="card-face-content">
                            <span className="card-text">Happy Holidays!</span>
                        </div>
                    </div>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                    <figure className="photo"><img src="https://assets1.ignimgs.com/2019/03/14/avengers-endgame-ver2-poster-button-1552573654882.jpg" /></figure>
                </label>
            </div>
        </>
    )
}

export default Demo
