import React from 'react'


function WireTransfer() {
    const bankDetails=`Wire transfer data:
    
            Account number: 55 0000 5555 0000 5555 0000 5555 0000
            Bank: National Bank of Antarctica`
    
    return (
        <div>
            <pre>{bankDetails}
             </pre>
        </div>
    )
}

export default WireTransfer
