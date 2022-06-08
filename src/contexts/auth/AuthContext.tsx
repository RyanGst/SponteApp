import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import authService from '../../services/auth';
import { wait } from '../../services/utils';
import { IUser } from '../../types/IUser';



type User = Omit<IUser, "password">
interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn({ email, password }: IUser): Promise<void>;
    signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<Omit<IUser, "password"> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStorageData() {

            const value = await AsyncStorage.getItem('@SPONTE')
            if (value) {
                setUser(JSON.parse(value));
            }

            await wait(1000)
            setLoading(false);
        }
        loadStorageData();
    }, []);

    async function signIn({ email, password }: IUser) {
        const response = await authService.login({ email, password });
        setUser(response);
        await AsyncStorage.setItem('@SPONTE', JSON.stringify(response))
    }

    async function signOut() {
        await AsyncStorage.removeItem('@SPONTE')
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, loading, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }

    return context;
}

export { AuthProvider, useAuth };