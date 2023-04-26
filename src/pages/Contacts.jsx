import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_4dzm7oz', 'template_qqolcec', form.current, 'Yc4mzWarFs7W36WL5')
		  .then((result) => {
			  console.log('Сообщение успешно отправлено');
			  toast.success()
		  }, (error) => {
			  toast.error('Возникла ошибка')
		  });
		  e.target.reset()
	  };

    return (
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch" style={{border: '0.02em solid black'}}>
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Связаться</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
							  Вы можете оставить сообщение здесь
				      		</div>
									<form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label">ФИО</label>
													<input type="text" className="form-control" name="user_name" id="user_name" placeholder='ФИО' required/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label">Email</label>
													<input type="email" className="form-control" name="user_email" id="user_email" placeholder='Адрес электронной почты' required/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label">Тема</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder='Тема' required/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label">Сообщение</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder='Сообщение' required></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<center>
													<button type='submit'  className='btn_send'>Отправить сообщение</button>
													</center>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 d-flex align-items-stretch">
								<div className="info-wrap w-100 p-md-5 p-4" style={{background: 'rgba(1, 210, 142, 0.4)'}}>
									<h3>Связь с нами:</h3>
									<p className="mb-4">Мы открыты для любых предложений или общения.</p>
				        	<div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Адрес:</span> Проспект победителей 39 офис 302 Минск 220035, Беларусь</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-phone"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Телефон:</span> <a href="tel://1234567920">+375 17 219 48 40</a></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">bvg1952@gmail.com
                                </a></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-globe"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Факс:</span> <a href="#">+(375)(17) 306-35-23</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
	</section>
    );
};

export default Contacts;