import Image from 'next/image';
import styled from 'styled-components';

interface UserProfileProps { }
const UserName = styled.div`
font-size:12px;
font-weight:600;
`;
const UserProfile: React.FC<UserProfileProps> = () => {

    return (
        <div className='d-flex align-items-center gap-2'>
            {/* Display user profile picture */}
            <Image src={'/assests/dp.png'} width={30} height={30} alt="skymusicLogo" style={{ borderRadius: '50%' }} priority={false} />
            {/* Display username */}
            <UserName>{'GUEST'}</UserName>
        </div>
    );
};

export default UserProfile;
