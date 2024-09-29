import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    //constructor
    constructor() {
        //url /projid clientside appwrite
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwritePROJECTID);
        //database
        this.databases = new Databases(this.client)
        //storage
        this.bucket = new Storage(this.client)
    }

    //database curd opweation
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(config.appwriteDATABASEID, config.appwriteCOLLECTIONID, slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                });

        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(config.appwriteDATABASEID, config.appwriteCOLLECTIONID, slug, {
                title,
                content,
                featuredImage,
                status,
            })
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDATABASEID, config.appwriteCOLLECTIONID, slug)

            return true;

        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDATABASEID,
                config.appwriteCOLLECTIONID,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDATABASEID,
                config.appwriteCOLLECTIONID,
                queries,

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appwriteBUCKETID, ID.unique(), file)

        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBUCKETID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBUCKETID,
            fileId
        )
    }
    


}
const service = new Service();
export default service;