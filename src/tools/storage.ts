const TODOS_STORAGE_FLAG = "todos";

export const setToDosInStorage = (payload: Array<any>): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        try {
            localStorage.setItem(TODOS_STORAGE_FLAG, JSON.stringify(payload));
            resolve(true);
        } catch (error) {
            reject(false);
        }
    });
};

export const getToDosFromStorage = <T>(): T => {
    const flagData = localStorage.getItem(TODOS_STORAGE_FLAG);
    return flagData ? JSON.parse(flagData) : [];
};
