import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkIsLoggedIn = async (): Promise<boolean> => {
    try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        return value === 'true';
    } catch (error) {
        console.error('Error reading login state:', error);
        return false;
    }
};