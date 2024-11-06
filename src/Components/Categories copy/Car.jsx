import { useState } from 'react'
import '../Card/Card.css'
import { useNavigate } from 'react-router-dom'

const Car = ({ detail }) => {
  const [visible, setVisible] = useState((5))

  const loadMore = () => {
    setVisible((preVal => preVal + 8))
  }


  return (
    <>
      <div>

        <div className="list" id='lis'>
          {!detail ? "" : detail.slice(1, visible).map((curItem) => {
            if (!curItem.urlToImage) {
              return null
            } else {
              return (
                <div className="news" onClick={() => window.open(curItem.url)}>
                  <img className='skeleton' src={curItem.urlToImage} alt="" />
                  <h5>{curItem.title} </h5>
                  <p>{curItem.description} </p>
                </div>
              )
            }
          })
          }
        </div>
      </div>

    </>
  )
}
export default Car