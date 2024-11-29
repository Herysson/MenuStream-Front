import { productData } from "../interface/productData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080';

const postData = async (data: productData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/products', data);
    return response;
}

export function useProductDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product-data'] })
        }
    })

    return mutate;

}