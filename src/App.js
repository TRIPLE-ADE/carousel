import Carousel from "./components/Carousel";
import { useState } from "react";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import image1 from "./images/pic1.jpg"
import image2 from "./images/pic2.jpg"
import image3 from "./images/pic3.jpg"
function App() {
  const users = [
    {
      name: 'First User',
      image: image1,
      id: 1
    },
    {
      name: 'Second User',
      image: image2,
      id: 2
    },
    {
      name: 'Third User',
      image: image3,
      id: 3
    }
  ]
  const [currentUser, setCurrentUser] = useState(0)

  const handleNext = () => {
    currentUser === users.length - 1 ? setCurrentUser(0) : setCurrentUser(currentUser + 1)
  }
  const handlePrev = () => {
    currentUser === 0 ? setCurrentUser(users.length - 1) : setCurrentUser(currentUser - 1)
  }
  return (
   <main>
      <div className="container">
        <FaChevronLeft onClick={handlePrev} className="btn"/>
        {
          users.map(user => (<Carousel key={user.id} user={user} currentUser={currentUser}/>))
        }
        <FaChevronRight onClick={handleNext} className="btn"/>
      </div>
   </main>
  );
}

export default App;
