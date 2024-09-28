const ColorChangingCircle = ({children}) => {
    return (
        <div className="circle absolute top-0">
            <style jsx>{`
                .circle {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    background: conic-gradient(
                        from 0deg,
                        red,
                        orange,
                        yellow,
                        green,
                        blue,
                        indigo,
                        violet,
                        red
                    );
                }

                @keyframes rotate-colors {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
            <div className="fixed">
                {children}
            </div>
        </div>
    );
};

export default ColorChangingCircle;
