// import { AsyncStorage } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "my_app_storage";
export type APP_STORAGE_KEYS = "ACCESS_TOKEN" | "SESSION" | "USER";

/**
 * Set an item to storage
 * @param key storage|app key
 * @returns
 */

export async function setItem(key: APP_STORAGE_KEYS, value: string) {
  try {
    await AsyncStorage.setItem(`${STORAGE_KEY}:${key}`, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Error setting item:", error);
  }
}

/**
 * Get an item from storage
 * @param key storage|app key
 * @returns
 */

export async function getItem(key: APP_STORAGE_KEYS) {
  try {
    const value = await AsyncStorage.getItem(`${STORAGE_KEY}:${key}`);

    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting item:", error);
  }
}

/**
 * Remove an item from storage
 * @param key storage|app key
 * @returns
 */

export async function removeItem(key: APP_STORAGE_KEYS) {
  try {
    await AsyncStorage.removeItem(`${STORAGE_KEY}:${key}`);
  } catch (error) {
    console.error("Error removing item:", error);
  }
}

/**
 * Clear all data from storage
 * @returns
 */

export async function clearStorage() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
}
