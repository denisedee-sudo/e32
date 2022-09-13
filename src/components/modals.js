import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
const Modals = () => {
    return(
    <div>
            <div class="modal fade" id="PrivacyPolicy">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header">
                            <h5>Privacy Policy</h5>
                        </div>
                        <div class="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci assumenda aut odio voluptatem alias, totam ad itaque ut quod provident numquam voluptas ipsa vero recusandae. Doloribus excepturi officia iste.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-light" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="TnC">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header">
                            <h5>Terms and Conditions</h5>
                        </div>
                        <div class="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci assumenda aut odio voluptatem alias, totam ad itaque ut quod provident numquam voluptas ipsa vero recusandae. Doloribus excepturi officia iste.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-light" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="DMCA">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header">
                            <h5>DMCA</h5>
                        </div>
                        <div class="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci assumenda aut odio voluptatem alias, totam ad itaque ut quod provident numquam voluptas ipsa vero recusandae. Doloribus excepturi officia iste.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-light" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="JJKModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>Jujutsu Kaisen</h5>
                        </div>
                        <div class="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci assumenda aut odio voluptatem alias, totam ad itaque ut quod provident numquam voluptas ipsa vero recusandae. Doloribus excepturi officia iste.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-dark">
                                Sign up Now!
                            </button>
                            <button class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
   }
   
export default Modals;