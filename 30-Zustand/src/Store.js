import {
    create
} from "zustand";
import {
    createJSONStorage,
    devtools,
    persist
} from "zustand/middleware";

const useMyStore = create(devtools(persist((set, get) => ({
    count: 1,
    name: "salman khan",
    increment: () => {
        set((state) => ({
            count: state.count + 1
        }))
    },
    capitalizedName: () => {
        console.log(get())
        const {
            name
        } = get();
        set({
            name: name.charAt(0).toUpperCase() + name.slice(1)
        })
    }
}), {
    name: 'Salman Store',
    storage: createJSONStorage(() => sessionStorage)
})));

export default useMyStore;

{/*

  1. create -> use
  2. set karne ke liye --> set(), and get karne ke liye --> get()
  3. subscription is directly dependent to rerender
  4. Pure store ka subscription ek baari me nahi lena hai (performance down ho jaayega)
  5. middlewares use kar skte ho
  6. persist middleware --> to save date into local or session storage
  7. devtools middleware --> visual representation of state and actions
  
*/}