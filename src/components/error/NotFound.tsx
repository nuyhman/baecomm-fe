/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom';
import { styles } from './not-found.emotion';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    const canGoBack = window.history.state.idx !== 0;
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div css={styles.container}>
      <button type='button' onClick={handleGoBack} css={styles.button}>
        <span aria-label='go-back'>&larr;</span>
        <span>Go back</span>
      </button>
      <span>죄송합니다. 🥲</span>
      <br />
      <p>서비스 에러가 발생하였습니다.</p>
      <p>잠시 후 다시 이용해 주시기 바랍니다.</p>
    </div>
  );
};
export default NotFound;
