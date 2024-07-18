
const FooterGeneral = () => {
    return (
        <>
            <footer className="bg-cyan-950 text-white  flex flex-col py-5 lg:flex-row lg:justify-between lg:items-center lg:px-12">

                <div className="m-auto lg:m-0">
                    <img className="h-44" src="images/logo_2.png" alt="logo" />

                </div>
                <div className=" text-center">
                    <div>
                        <p className="py-1">© 2024 All Rights Reserved</p>
                    </div>
                    <div className="flex items-center justify-center py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <p className="px-3 "> mmv@medinamarketingbusiness.com</p>
                    </div>
                    <div className="flex items-center justify-center py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building" width="20"
                            height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l18 0" />
                            <path d="M9 8l1 0" />
                            <path d="M9 12l1 0" />
                            <path d="M9 16l1 0" />
                            <path d="M14 8l1 0" />
                            <path d="M14 12l1 0" />
                            <path d="M14 16l1 0" />
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                        </svg>
                        <p className="px-3"> 611 Wilshire Blvd Suite 900 #1008,<br/> Los Angeles CA 90017</p>
                    </div>
                    <div className="flex items-center justify-center py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="20"
                            height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <p className="px-3">(800) 769-6835</p>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default FooterGeneral