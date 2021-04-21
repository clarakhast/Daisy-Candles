import React from 'react'
import {Link} from 'react-router-dom'
import 'css/Page404.css'

const Page404 = () => {
    return (
        <>
        <header className="error-intro">
                <h1 className="error">404 <span>Whoops, something went wrong!!</span></h1>
                <p>Please click on the button and go back to Home page.</p>
                <Link to ="/" className="error-btn">Go Back Home!</Link>
            </header>
            
        </>
    )
}

export default Page404