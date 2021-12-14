import axios from 'axios';

import {  User } from '../entities';

class SocialNetworkService {

    private readonly api = axios.create({
        baseURL: 'https://example-ecommerce.herokuapp.com'
    });

    public async login(email: string, password: string): Promise<string | null> {
        try {
            const response = await this.api.post('/user/login', { email, password });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    public async createUser(user: User) {
        try {
            console.log("Usuario dentro metodo")
             console.log(user)
             var objeto = JSON.stringify(user);
             console.log("objeto convertido")
             console.log(objeto)

             const obj = JSON.parse(objeto);

             console.log(obj)
            
            const response = await this.api.post<User>('/user/customer/add', obj);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }





}


export const snService = new SocialNetworkService();