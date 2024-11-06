import Skeleton from "react-loading-skeleton"

const CardSkeleton = () => {

  const MultipleCard = () => (
    <div className="card-skeleton">
      <div className="top">
        <Skeleton width={300} height={300} />
      </div>
      <div className="bot">
        <Skeleton count={2} width={300} />
      </div>
      <div className="bo">
        <Skeleton count={3} width={300} height={8} />
      </div>
    </div>
  )
 
  return (
    <div className="sk-box">
      {Array.from({ length: 8 }, (_, index) => (<MultipleCard key={index} />))}
    </div>
  )
}

export default CardSkeleton