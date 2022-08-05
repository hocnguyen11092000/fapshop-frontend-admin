
import { LoginResponse } from '../model/authModel';
import { ListResponse, LoginPayload } from './../model/common';
import axiosClient from "./axiosClient";

const userApi = {
    login(params: LoginPayload): Promise<LoginResponse> {
        const url = "/user/login";
        return axiosClient.post(url, params);
    },

};

export default userApi;