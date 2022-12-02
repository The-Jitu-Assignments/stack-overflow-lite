import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='modal--header'>
        <div onClick={close} className='modal--close__btn'>
          x
        </div>
      </div>
      <div className='modal--content'>
        <div className="modal--content__item" onClick={() => {navigate('/'); close()}}>
          <AiFillHome />
          Home
        </div>
        <div className="modal--content__item">
          <GiPapers />
          All Questions
        </div>
        <div className="modal--content__item">
          <BsQuestionSquareFill />
          Unanswered Questions
        </div>
        <div className="modal--content__item">
          <GrLanguage />
          About Us
        </div>
        <div className="modal--content__item">
          <GiPriceTag />
          Pricing
        </div>
      </div>
    </>
  )
}

export default Sidebar