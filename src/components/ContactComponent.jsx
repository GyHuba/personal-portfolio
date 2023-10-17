import '../css/contact-component.css'

export default function ContactComponent(){

    const onButtonClick = () => {
        const pdfUrl = "../public/Huba Gyihor.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "huba-gyihor.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <>
        <div className="container content">
            <div className="second-title" id='contact'>Get in touch</div>
            <div className="contact-container">
                <div className="contact linkedin">
                    <div className="card-title">Linkedin</div>                    
                    <a href="https://www.linkedin.com/in/huba-gyihor-39641a24b/" target='blank' className='link'>{`Let's connect`}</a>          
                </div>
                <div className="contact email">
                    <div className="card-title">Email</div>                    
                    <span className='link'>gy.huba@gmail.com</span>         
                </div>
                <div className="contact phone-number">
                    <div className="card-title">Mobile</div>                    
                    <span className='link'>+36703296104</span>         
                </div>
                <div className="contact cv">
                    <div className="card-title">CV</div>                    
                    <span className='link' onClick={onButtonClick}>Download my CV</span>         
                </div>
            </div>
        </div>
        </>
    )
}