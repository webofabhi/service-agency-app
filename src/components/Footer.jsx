
import {FaFacebookF} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
   
    <footer className="bg-emerald-950 py-6 text-orange-50">
        <div className="containger mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-0">
            <div className="mb-4 flex space-x-4">
                <a href="#">
                    <FaFacebookF size={20} />
                 </a>
                 <a href="#">
                    <FaXTwitter size={20} />
                 </a>
            </div>
            <div className="text-sm text-center opacity-50">
                <p>&copy; {new Date().getFullYear()} adCarrot. All Rights Reserved</p>
                <p>Designed by <a href="#" className="text-orange-50"></a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer