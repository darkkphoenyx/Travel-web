
const ContactForm = () => {
    return (
        <div className="max-w-[870px] mx-auto">
            <form action="#">
                <div className="grid grid-cols-2 gap-base">
                    <div className="lg:col-span-1 col-span-2">
                        <input type="text" placeholder="Your Name" className="input_style__primary" />
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                        <input type="text" placeholder="Your Phone Number" className="input_style__primary" />
                    </div>
                    <div className="col-span-2">
                        <input type="email" placeholder="Your Subject" className="input_style__primary" />
                    </div>
                    <div className="col-span-2">
                        <textarea cols={30} rows={6} className="input_style__primary" placeholder="Your Subject..." defaultValue={""} />
                    </div>
                    <div className="col-span-2">
                        <button aria-label="contact submit" type="submit" className="btn_primary__v1">
                            Find Out More
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm