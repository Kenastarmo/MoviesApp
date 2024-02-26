import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
    return (
        <>
            <section className="min-h-screen h-screen bg-[#191624] flex justify-center items-center">
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </section>    
        </>
    );
};  
export default LoaderComp;