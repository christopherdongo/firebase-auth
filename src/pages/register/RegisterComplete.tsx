import { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import { BsCheck2All } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
//import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const RegisterComplete = () => {

      // * useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //*strength of password
  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();


    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{minHeight: "88vh", backgroundColor: "#f9f9fA"}}
        >
        <Card style={{width: "24rem"}}>
            <Card.Body className="p-4">
            <div className="text-center mb-4">
                <TiUserAddOutline size={35} color='#999'/>
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Complete your registration</h2>

                <div className="row py-7 overflow-hidden">
                    <form action="">
                        <div className="col-12 mb-2">
                            <div className="form-floating">
                                <input type="text" name="email" className="form-control" id="email" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email" className="form-label">Email</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" name="password" className="form-control" id="password" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="email" className="form-label">Password</label>
                            </div>
                        </div>

                        <Card className="border-light t-3">
                            <Card.Body>
                               <ul className="list-unstyled">
                                <li className="d-flex align-items-center mb-2">
                                    <small className="ms-7">Lowercase and uppercase</small>
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <small className="ms-7">number and 6 characters</small>
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <small className="ms-7">special character</small>
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <small className="ms-7">att least 6 characters</small>
                                </li>
                               </ul>
                            </Card.Body>

                        </Card>

                        <div className="col-12">
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg">
                                     Complete Registration
                                </button>

                            </div>

                        </div>
                    </form>

                </div>

                <div className="text-center mt-3">
                    <Link to="" className="text-decoration-none"
                    style={{color: "#fd7e14"}}
                    >Home</Link>
                    <span className="mx-2">ready have an account? </span>
                   <Link to="/login" className="text-decoration-none">Login</Link>

                </div>

            </div>
            </Card.Body>
        </Card>
        </Container>
    )
}