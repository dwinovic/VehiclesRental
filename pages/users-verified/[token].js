/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from '../../src/config/Axios';
import { toastify } from '../../src/utils';

const UserVerified = (props) => {
  console.log('props.token:', props.token);
  const [status, setStatus] = useState('failed');
  const router = useRouter();

  useEffect(() => {
    if (props.token) {
      Axios.get(`/users/verify-token/${props.token}`)
        .then((res) => {
          console.log('response:', res);
          setStatus(1);
        })
        .catch((err) => {
          console.log('error:', err.response);
          setStatus('failed');
        });
    }
  }, [props.token]);

  useEffect(() => {
    if (status === 1) {
      setTimeout(() => {
        router.replace('/login');
      }, 3000);
    }
  }, [status]);

  const reSendEmail = () => {
    toastify('Sorry, this feature is under development...', 'warning');
  };

  return (
    <StyledUserVerified>
      <div>
        <p className="loading">Loading...</p>
        {status === 1 && <p>Success Verified Account</p>}
        {status === 'failed' && (
          <div className="failed-verification">
            <p>Failed Verified Account</p>
            <p className="re-send" onClick={reSendEmail}>
              Send email verification again
            </p>
          </div>
        )}
      </div>
    </StyledUserVerified>
  );
};

export default UserVerified;

export const getServerSideProps = async (context) => {
  let token = null;
  try {
    const { params } = context;
    token = params.token;

    return {
      props: {
        token,
      },
    };
  } catch (error) {
    token = error.response;
    return { props: { dataVehicle } };
  }
};

const StyledUserVerified = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    text-align: center;
  }
  .failed-verification {
    text-align: center;
    .re-send {
      color: blue;
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;
