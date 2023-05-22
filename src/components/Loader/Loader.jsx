import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (<ThreeDots
        height="85"
        width="85"
        radius="8"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
    />

    );
};