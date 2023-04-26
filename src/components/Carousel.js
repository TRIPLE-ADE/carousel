function Carousel({user, currentUser}) {
  return (
    <>
        <div className={user.id - 1 === currentUser ? "carousel active" : "carousel"}>
            <img src={user.image} alt="Images" />
            <p>{user.name}</p>
            <p>{user.id}</p>
        </div>
    </>
  )
}

export default Carousel