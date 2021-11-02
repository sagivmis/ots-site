import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Tokenomics from "../Tokenomics/Tokenomics";
import Title from "../Title/Title";
import redSmudge from "../../images/red-smudge.png";

function App() {
    return (
        <div className='App'>
            <Header />
            <Title
                text='TOKENOMICS'
                bg={redSmudge}
                bgClass='tokenomics'
                fontClass=''
            />
            <Tokenomics />
            <Title text='PARTNERS' bg={redSmudge} bgClass='partners' />
            <Footer />
        </div>
    );
}

export default App;
