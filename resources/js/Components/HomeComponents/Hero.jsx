import BorderRainbow from "@/utils/BorderRainbow";
import { useEffect } from "react";

const Hero = () => {
    const style = {
        background: 'url("https://img.freepik.com/free-photo/digital-circle-circuit-blue-background-futuristic-technology_53876-124643.jpg?w=740&t=st=1727362069~exp=1727362669~hmac=f50e58b980d01b97971fd901ab91295066fc857326c9ae9693debb3df4434995")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
    };

    const colors = {
        red: setInterval(() => {
                return Math.floor(Math.random()*255+1)
            }, 1000),
        green: setInterval(() => {
                return Math.floor(Math.random()*255+1)
            }, 1000),
        blue: setInterval(() => {
                return Math.floor(Math.random()*255+1)
            }, 1000)
    }
    // useEffect(() => {
    //     console.log(colors.red)
    //     console.log(colors.green)
    //     console.log(colors.blue)
    // }, [colors])

    return (
        <div className="text-white h-screen flex items-center justify-between w-full lg:p-0 p-5" style={style}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 mix">
                <div className="mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Discover the Latest in Technology
                    </h1>
                    <p className="text-lg mb-6 mix-blend-normal">
                        Stay updated with the newest trends, gadgets, and innovations in the tech world. Join us on our journey to explore cutting-edge technologies and their impact on our lives.
                    </p>
                    <a href="/latest-posts" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-400 transition">
                        Read Latest Posts
                    </a>
                </div>
                <div className=" h-full hidden lg:flex md:flex justify-center">
                    <div className="lg:w-6/12 w-4/6">
                    <BorderRainbow>
                        <img
                            src="https://wiipa.org/wp-content/uploads/2023/03/photo_2023-03-25_23-12-23.jpg"
                            alt="Technology"
                            className="w-full h-auto rounded-full shadow-lg"
                        />
                    </BorderRainbow>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
