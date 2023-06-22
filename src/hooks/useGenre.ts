import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface fetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGeneres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<fetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGeneres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenre;
