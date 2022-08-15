import React from "react";

class Form extends React.Component {
    render() {
        return (
            <section
                data-aos="fade-up"
                data-aos-duration="2500"
                className="forms"

            >
                <div className="overlay-mf" ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-mf">
                                <div id="contact" className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="title-box-2">
                                                <h5 className="title-left " >Enviar Mensaje</h5>
                                            </div>
                                            <div>
                                                <form
                                                    action="https://formsubmit.co/el/cafire"
                                                    method="POST"
                                                    className="contactForm"
                                                >
                                                    <div id="sendmessage" className="text-white">
                                                        Mensaje Enviado!
                                                    </div>
                                                    <div id="errormessage"></div>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    className="form-control"
                                                                    id="name"
                                                                    autoComplete="off"
                                                                    placeholder="Nombre"
                                                                    data-rule="minlen:4"
                                                                    data-msg="Please enter at least 4 chars"
                                                                />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    name="email"
                                                                    id="email"
                                                                    placeholder="Email"
                                                                    data-rule="email"
                                                                    autoComplete="off"
                                                                    data-msg="Please enter a valid email"
                                                                />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="subject"
                                                                    id="subject"
                                                                    placeholder="Asunto"
                                                                    data-rule="minlen:4"
                                                                    autoComplete="off"
                                                                    data-msg="Please enter at least 8 chars of subject"
                                                                />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <textarea
                                                                    className="form-control"
                                                                    name="message"
                                                                    autoComplete="off"
                                                                    rows="5"
                                                                    data-rule="required"
                                                                    data-msg="Please write something for us"
                                                                    placeholder="Ingrese Su Mensaje..."
                                                                ></textarea>
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <button
                                                                type="submit"
                                                                className="button btn-primary btn-lg submit "
                                                            >
                                                                Enviar Mensaje
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="copyright-box">
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        );
    }
}
export default Form;