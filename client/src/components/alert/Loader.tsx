import Loading from 'react-loading-components';

const Loader = () => (
    <div className='alertWrapper'>
        <Loading type='puff' width={100} height={100} fill='#f44242' />
    </div>
);

export default Loader;