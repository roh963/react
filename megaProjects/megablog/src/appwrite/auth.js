import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
       client = new Client();
       account;

       constructor(){
            this.client.setEndpoint(config.appwriteURL);
            this.client.setProject(config.appwritePROJECTID);
            this.account = new Account(this.client)
       }

       async createAccount({email, password,name}){
        try {
        const userAccount=  await this.account.create(ID.unique(),email, password,name)
            if (userAccount) {
                //call another function
                return this.login({email,password})
            }else{
                return userAccount;
            }
        } catch (error) {
           throw error 
        }
       }
       async login ({email, password}){     
        try {
            const userAccount = await this.account.createEmailPasswordSession(email, password)
            return userAccount;
            
        } catch (error) {
            throw error
        }
       }
       async getCurrentUser(){
        try {
            const user= await this.account.get()
            return user;
            
        } catch (error) {
            throw error
        }
        return null;
       }
       async logout(){
            try {
              return  await this.account.deleteSessions()
            } catch (error) {
                throw error
            }
       }
       
}

const authService = new AuthService();

export default authService;