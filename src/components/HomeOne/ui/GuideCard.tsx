import Image from "next/image";
import Link from "next/link";


const GuideCard = (
    { name, designation, imgUrl}:
        {
            name: string,
            designation: string,
            imgUrl: string
        }
) => {
    return (
        <div className="shadow-custom-1 p-6 group">
            <div className="overflow-hidden">
                <Image width={'345'} height={'329'} src={imgUrl} alt={name} className="w-full group-hover:scale-105 duration-300" />
            </div>
            <div className="mt-5">
                <h4 className="text-dark-1 font-bold leading-[1.35] lg:text-lg text-2md">{name}</h4>
                <p className="text-dark-3 lg:text-md text-base font-medium mt-1">{designation}</p>
                <ul className="pt-[10px]">
                    <li className="guide_social__icon">
                        <Link href="#">
                            <i className="bi bi-facebook" />
                        </Link>
                    </li>
                    <li className="guide_social__icon">
                        <Link href="#">
                            <i className="bi bi-twitter" />
                        </Link>
                    </li>
                    <li className="guide_social__icon">
                        <Link href="#">
                            <i className="bi bi-pinterest" />
                        </Link>
                    </li>
                    <li className="guide_social__icon">
                        <Link href="#">
                            <i className="bi bi-instagram" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GuideCard