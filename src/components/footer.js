import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
// import './modals';
const Footer = () => {
    return(
    <footer className="row bg-dark pt-3 text-center text-info">
         
            <p className="col-3">© 2022 kaisen-jujutsu.com. All rights reserved.</p>
            <p className="col-3 pointer" data-bs-toggle="modal" data-bs-target="#PrivacyPolicy">Privacy Policy</p>
            <p className="col-3 pointer" data-bs-toggle="modal" data-bs-target="#TnC">Terms and Conditions</p>
            <p className="col-3 pointer" data-bs-toggle="modal" data-bs-target="#DMCA">DMCA</p>
        
    </footer>
    );
   }
   
export default Footer;