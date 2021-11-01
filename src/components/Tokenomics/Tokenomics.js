import "./Tokenomics.css";
import TokenomicsInfo from "../TokenomicsInfo/TokenomicsInfo";

const Tokenomics = () => {
    const tokenomics = [
        <TokenomicsInfo title='BURN' text='10% BURN' key='1' />,
        <TokenomicsInfo
            title='BUYBACK'
            text='3% BUYBACK WALLET FOR DIPS'
            key='2'
        />,
        <TokenomicsInfo
            title='MARKETING'
            text='2% GOES TO MARKETING'
            key='3'
        />,
        <TokenomicsInfo
            title='SPECIAL FUNCTION'
            text='SPECIAL EFFECT ON HOLDERS'
            key='3'
        />,
    ];
    return <div className={`grid-tokenomics `}>{tokenomics}</div>;
};

export default Tokenomics;
