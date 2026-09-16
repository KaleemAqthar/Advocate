import Button from "../components/Button";


function Contact() {

  const handleSubmit = (event) => {

    event.preventDefault();

    alert(
      "Thank you. Your consultation request has been submitted."
    );

  };


  return (
    <>

      <section className="page-hero">

        <div>

          <h1>
            Contact Us
          </h1>

          <p>
            Home / Contact
          </p>

        </div>

      </section>


      <section className="section section-dark">

        <div className="container">

          <div className="contact-grid">


            {/* CONTACT INFORMATION */}

            <div className="contact-info">

              <span className="section-label">
                Get In Touch
              </span>


              <h2>
                Let's Discuss
                <br />
                Your Legal Matter
              </h2>


              <p>
                Contact our office to request a consultation
                or enquire about our legal services.
              </p>


              <div className="contact-details">


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>

                    <h4>
                      Office Address
                    </h4>

                    <p>
                      2nd Floor, Legal Chambers,
                      <br />
                      Hyderabad, Telangana
                    </p>

                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <div>

                    <h4>
                      Phone
                    </h4>

                    <p>
                      +91 90000 00000
                    </p>

                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>

                    <h4>
                      Email
                    </h4>

                    <p>
                      office@lexora.in
                    </p>

                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-clock"></i>
                  </div>

                  <div>

                    <h4>
                      Office Hours
                    </h4>

                    <p>
                      Monday – Saturday
                      <br />
                      10:00 AM – 6:00 PM
                    </p>

                  </div>

                </div>


              </div>

            </div>


            {/* FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <h3>
                Request a Consultation
              </h3>


              <div className="form-grid">


                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Legal Matter
                  </label>

                  <select required>

                    <option value="">
                      Select Practice Area
                    </option>

                    <option>
                      Civil Litigation
                    </option>

                    <option>
                      Criminal Law
                    </option>

                    <option>
                      Family Law
                    </option>

                    <option>
                      Property Law
                    </option>

                    <option>
                      Corporate Law
                    </option>

                    <option>
                      Other
                    </option>

                  </select>

                </div>


                <div className="form-group full">

                  <label>
                    Brief Description
                  </label>

                  <textarea
                    rows="7"
                    placeholder="Briefly describe your legal matter..."
                    required
                  />

                </div>


              </div>


              <button
                type="submit"
                className="btn btn-gold"
                style={{
                  marginTop: "22px"
                }}
              >

                Submit Consultation Request

                <i className="bi bi-arrow-up-right"></i>

              </button>

            </form>


          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;