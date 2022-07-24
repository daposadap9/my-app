import { BrowserRouter as Router,} from 'react-router-dom';
import Footer from '../components/footer';
import Navigation from '../components/Navigation';
import { PostContainer } from '../context/postContext';
import AnimatedRoutes from './animatedRoutes';

function  AppRouter() {
  return(
  <PostContainer>
          <Router>
                  <Navigation/>
                  <AnimatedRoutes/>
        <Footer/>
        </Router>
        </PostContainer>
   )
 }
 export default AppRouter

