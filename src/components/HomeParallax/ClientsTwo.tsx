import Marquee from "react-fast-marquee"
import ClientsDataTwo from '@/constant/HomeParallax/ClientsDataTwo';

const ClientsTwo = () => {
    return (
        <div className="partner_style__three lg:pt-30 pt-24">
            <div className="container">
                <Marquee
                    pauseOnHover={true}

                >
                    {ClientsDataTwo?.clients?.map((client)=>(
                        <div className="lg:min-h-[120px] mx-6 min-w-[200px] py-5 px-5 text-center border border-slate-100 flex justify-center items-center" key={client.id}>
                        <img src={client.logo} key={client.id} alt="partner-logo" />
                    </div>
                    ))}
                    
                </Marquee>
            </div>
        </div>
    )
}

export default ClientsTwo