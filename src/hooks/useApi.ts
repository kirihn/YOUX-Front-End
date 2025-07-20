import type { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

interface ServerError {
  message: string | string[];
  error: string;
  statusCode: number;
}

export function useApi<T, D = undefined>(
  request: (body?: D) => Promise<AxiosResponse<T>>,
) {
  const [resData, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async (body?: D) => {
    setLoading(true);

    try {
      const response = await request(body);
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      const error = err as AxiosError<ServerError>;

      setData(null);
      if (error.response) {
        const serverError = error.response.data;

        if (serverError) {
          if (Array.isArray(serverError.message)) {
            alert(serverError.message.join('\n'));
          } else {
            alert(serverError.message);
          }
        }
      } else if (error.request) {
        alert('Сервер не ответил. Проверьте подключение к сети.');
      } else {
        const errorMessage = error.message || 'Ошибка запроса';

        alert(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return { resData: resData, setResData: setData, loading, execute };
}
