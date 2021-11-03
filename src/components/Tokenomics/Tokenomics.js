import "./Tokenomics.css";
import TokenomicsInfo from "../TokenomicsInfo/TokenomicsInfo";
import background from "../../images/BG.png";

const Tokenomics = () => {
    const tokenomics = [
        { title: "BURN", text: "10% BURN", id: "1" },
        { title: "BUYBACK", text: "3% BUYBACK WALLET FOR DIPS", id: "2" },
        { title: "MARKETING", text: "2% GOES TO MARKETING", id: "3" },
        {
            title: "SPECIAL",
            text: "SPECIAL EFFECT ON HOLDERS",
            id: "4",
        },
    ];

    return (
        <div className={`grid-tokenomics `}>
            {tokenomics.map((detail) => {
                return (
                    <div>
                        <img src={background} alt='bg' className='bg' />
                        <TokenomicsInfo
                            title={detail.title}
                            text={detail.text}
                            key={detail.id}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Tokenomics;
