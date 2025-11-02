import reactLogo from '../assets/react.svg';
export  const HeaderTask = () => {
    return (
        <header>
            <div className="logo">
                <img src={reactLogo} alt="Task Mate Logo" />
                <span>Task Mate</span>
            </div>
            <div className="themeSelector">
                <span className="light"></span>
                <span className="dark activeTheme"></span>
                <span className="medium"></span>
                <span className="gOne"></span>
                <span className="gTwo"></span>
                <span className="gThree"></span>
            </div>
        </header>
    )
}
