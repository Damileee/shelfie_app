import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('682ab51b000aa1100ee6')
    .setPlatform('dev.lee.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);