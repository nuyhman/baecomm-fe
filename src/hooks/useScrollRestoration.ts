import { useEffect } from 'react';

type RestoreData<T> = {
  data: T;
  scrollY: number;
};
/**
 * 페이지 이동 시 스크롤 위치와 데이터를 저장하고 복구하는 커스텀 훅
 * @param key
 * @param isComplete
 * @returns
 */
const useScrollRestoration = (key: string, isComplete?: boolean) => {
  const saveRestoreData = <T>(data: RestoreData<T>) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  };

  const getRestoreData = () => {
    return sessionStorage.getItem(key);
  };

  const restore = async (callback: () => Promise<void>, scrollY: number) => {
    await callback();
    window.scrollTo(0, scrollY);
  };

  const restoreComplete = () => {
    sessionStorage.removeItem(key);
  };

  /**
   * 뒤로가기를 하는 경우가 아니라 다른 경로로 이동하는 경우에도
   * restoreComplete 함수를 호출하여 sessionStorage에 저장된 데이터를
   * 삭제하여 이전 상태로 돌아가지 않도록 한다.
   */
  useEffect(() => {
    if (!isComplete) return;
    return () => {
      restoreComplete();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { saveRestoreData, getRestoreData, restore };
};

export default useScrollRestoration;
