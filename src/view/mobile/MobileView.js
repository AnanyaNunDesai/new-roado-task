import { ReactComponent as ClonifyLogo } from '../../assets/Clonify.svg';

const MobileView = () => {
    return (
        <div className='mobile-page'>
            <div className='header'>
                <ClonifyLogo />
                <div className='avatar'>
                    <img className='circular-clipped' src={'./Avatar.jpeg'} alt="Avatar"/>
                    <div className='indicator' />
                </div>
            </div>
        </div>
    );
};

export default MobileView;