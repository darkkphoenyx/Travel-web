import Marquee from "react-fast-marquee";
import ClientData from '@/constant/HomeOne/ClientData';
import Image from "next/image";
const Clients = () => {
    return (
        <Marquee 
            pauseOnHover={true}
            className="border-primary-1  border-b"
        >
            {ClientData.clients.map((item) => (
                <div className="partner-logo-item xl:min-w-[330px] lg:min-w-[280px] md:min-w-[200px] min-w-[170px] px-4 text-center" key={item.id}>
                    <Image 
                        src={item.logo} 
                        alt="pratners" 
                        height={50}
                        width={130}
                        className="lg:max-w-[138px] max-w-[100px] mx-auto" 
                    />
                </div>
            ))}
        </Marquee>
    );
}

export default Clients;