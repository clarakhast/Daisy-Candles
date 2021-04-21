import React from 'react'
import {Link} from 'react-router-dom'

const Page404 = () => {
    return (
        <>
            <h1>Whoops, something went wrong!!</h1>
            <Link to ="/">Go Back Home!</Link>
        </>
    )
}

export default Page404