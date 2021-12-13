import React from "react";

const loginContext = React.createContext(false) //Context which provide LoginStatus of User

const menuContext = React.createContext(0) //Context which provide AppMenu to other components

const loginTextContext = React.createContext('Login')

const courseContext = React.createContext(0)


/* const loginProvider = loginContext.Provider
const loginConsumer = loginContext.Consumer

export {loginProvider, loginConsumer} */
export {loginContext, menuContext, loginTextContext, courseContext}