import React from 'react'

function ButtonDiv() {
  return (
    <>
    <div>
        <button alt="btn-test" className='test-karo' >click the button</button>
        <p>this is paragraph</p>
    </div>


    <main aria-hidden="true">
    <button>Open dialog</button>
  </main>
  <div role="dialog">
    <button>Close dialog</button>
  </div>
    </>
  )
}

export default ButtonDiv