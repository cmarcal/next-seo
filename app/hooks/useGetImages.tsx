import { useCallback, useState } from "react";
import { getListImage } from "../service/get";

export type ImageDetail = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

interface ReturnHooks {
  imagesDetails: Array<ImageDetail>;
  isLoading: boolean;
  error: string;
  handleGetImages(): void;
}

export const useGetImages = (): ReturnHooks => {
  const [imagesDetails, setImagesDetails] = useState<Array<ImageDetail>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleGetImages = useCallback(() => {
    setIsLoading(true);
    getListImage()
      .then(({ data }) => setImagesDetails(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { imagesDetails, isLoading, error, handleGetImages };
};
