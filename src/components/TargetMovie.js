import React, { useState, useEffect } from 'react'

function TargetMovie({ targetedId }) {
    console.log(targetedId)
    return (
        <div>
            <div>{targetedId}</div>
        </div>
    )
}

export default TargetMovie
