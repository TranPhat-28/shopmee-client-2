import { createContext, useEffect, useState } from "react";

export const AdminAuthContext = createContext();

const AdminAuthContextProvider = (props) => {

    const [adminUser, setAdminUser] = useState(null);

    useEffect(() => {
        const adminUser = JSON.parse(localStorage.getItem('adminUser'));

        if (adminUser) {
            setAdminUser(adminUser);
        }
    }, [])

    return (
        <AdminAuthContext.Provider value={{ adminUser, setAdminUser }}>
            {props.children}
        </AdminAuthContext.Provider>
    );
}

export default AdminAuthContextProvider;