import FooterOne from "@/components/layout/FooterOne";
import HeaderOne from "@/components/layout/HeaderOne";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderOne />
            <main className="xl:pt-[100px] pt-[72px]">
                {children}
            </main>
            <FooterOne />
        </>
    );
}


export default Layout;