import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from '../../components/userCard/userCard';
import type { RootState } from '../../redux/store/store';
import {
  nextPage,
  backPage,
} from '../../redux/slices/pageIndexSlice';
import { useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import axios from 'axios';
import type { GetUsersResponse } from './types';

export function UserListPage() {
  const pageIndex = useSelector((state: RootState) => state.pageIndex);
  const dispatch = useDispatch();

  const { resData, execute } = useApi<GetUsersResponse>(async () =>
    axios.get('/api/user/GetUsers', {
      params: {
        pageIndex: pageIndex.pageIndex,
        countUsers: 4,
      },
    }),
  );

  const handleNextPage = () => {
    dispatch(nextPage());
  };
  const handleBackPage = () => {
    dispatch(backPage());
  };

  useEffect(() => {
    if (pageIndex.pageIndex) execute();
  }, [pageIndex]);

  return (
    <div className="userListPageContainer pageContainer">
      <div className="userListContainer">
        {resData?.users.map((user) => (
          <UserCard userData={user}/>
        ))}
      </div>
      <div className="paginationContainer">
        <button
          className="backButton"
          onClick={handleBackPage}
          disabled={pageIndex.pageIndex <= 1}
        >
          {'<'}
        </button>
        <div className="pageIndexContainer">{pageIndex.pageIndex}</div>
        <button
          className="nextButton"
          onClick={handleNextPage}
          disabled={!!resData && pageIndex.pageIndex >= resData.totalPages}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
