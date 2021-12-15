import axios from 'axios';

import {  User,LoginUser,Product } from '../entities';

class SocialNetworkService {

    private readonly api = axios.create({
        baseURL: 'https://example-ecommerce.herokuapp.com'
    });

    public async login(login: string, password: string): Promise<string | null> {
        console.log("Entrou metodo login"+login+"   "+password);
        const user: LoginUser = {
            
            login:login,
            password:password
        };
        console.log(user);
        var objeto = JSON.stringify(user);
        console.log(objeto);

        try {
            const response = await this.api.post('/user/login', {login,password});
            console.log("Usuario data")
            console.log(response.data)
            return response.data;
        } catch (error) {

            console.log("Erro do login");
            console.log(error);
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
            
            const response = await this.api.post<User>('/user/customer/add', user);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }


    public async getUser(token: string) {
        try {
            const config = this.createConfig(token);
            const response = await this.api.get<User>('/user/login', config);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    private createConfig(token: string) {
        return { headers: { Authorization: `Bearer ${token}` } };
    }

    public async getProduct() {
        try {
           // const config = this.createConfig(token);
            const response = await this.api.get<Product[]>('product/list');
            console.log("Produtos");
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}


export const snService = new SocialNetworkService();