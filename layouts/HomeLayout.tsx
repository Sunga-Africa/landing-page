import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />

            {children}
            <Footer />
        </>
    );
};
export default HomeLayout;
