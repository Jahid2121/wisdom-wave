
import learn from '../../assets/Humaaans - Graphs.png'
import Navbar from '../../shared/Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className="bg-gray-100 py-16">
            
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
                <div className="bg-custom-Pink h-3 w-full my-5  "></div>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                    <div className="max-w-md flex-shrink-0">
                        <img src={learn} alt="About Us" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="max-w-xl text-center md:text-left">
                        <p className="text-lg text-gray-700 mb-6">
                            Welcome to London <span className='text-custom-Pink font-medium'>WisdomWave</span>, your dedicated partner in organizing exceptional educational and training events in the heart of London. We are passionate about fostering knowledge, inspiring growth, and facilitating connections within the vibrant educational community of London.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            At London WisdomWave, we specialize in curating enriching learning experiences tailored for educators, trainers, and learners alike. Our team of dedicated professionals is committed to delivering seamless event management services, ensuring every educational initiative achieves its full potential.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Whether you are an educational institution, a training organization, or an individual learner, we invite you to explore our upcoming events. Join us in the exciting journey of continuous learning and skill enhancement. Let’s elevate education together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;
