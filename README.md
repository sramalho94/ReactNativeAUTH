# React-Native Auth Template

## By: Team 3 GAxTOP

---

## **_Description_**

#### A Template You Can Use to build out a React-Native project that uses JWT for Auth

#### This Project incorporates Tailwindcss, TypeScript, JWT, and React Navigation

---

## Getting Started

---

- `Fork` and `Clone` the repository
- `cd` into the project directory and run `yarn install`
- run `npx pod-install ios`
- run `yarn ios` to open Metro
- in your Metro terminal press `a` to start an android enviornment
- happy hacking! ☺️

---

## Workflow from Scratch

---

### Initial Setup

- run `npx react-native@latest init AwesomeProject`
- `cd` into Project
- run `mkdir src`, `mkdir src/screens`, `mkdir src/components`
- run `yarn add nativewind`, `yarn add --dev tailwindcss`
- run `npx tailwindcss init`
- replace the content key with `content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],`
- run `touch app.d.ts` and paste `/// <reference types="nativewind/types" />` into the first line
- add this line after `presets` in your `babel.config.js` file: `plugins: ["nativewind/babel"],`
- restart your VsCode
- run `cd ios && pod install && cd ..`
- run `yarn ios` or `yarn android`

### Auth Setup

- run `mkdir app app/context`
- run `touch app/context/AuthContext.tsx`
- build out the AuthContext.tsx file

  - create `Auth Props` Interface
  - create `TOKEN_KEY` variable
  - create `API_URL` using a ternary that checks for the platform OS
  - create AuthContext using createContext hook
    - create AuthContext function
  - create AuthProvider function

    - set AuthState
    - create useEffect that loads Token
    - create register function
    - create login function
    - create logout function
    - create value variable and save functions
    - return children nested within AuthContext.Provider

- Build out App.tsx for routing:

  - define `RootStackParamList`
  - create Stack
  - create AppNavigator

    - create useEffect within AppNavigator that checks to see the Authentication state
    - return NavigationContainer with Stack and Screens

  - edit App function so that `AuthProvider` wraps around everything, with a `SafeAreView` child component that has `AppNavigator` as a child

- Build out Login screen with appropriate form that uses the onLogin and Register functions from AuthContext
  -Build out Home screen and create a Logout Button
- Finito!

---

## Resources

---

- [ReactNativeKeychainDocs](https://github.com/oblador/react-native-keychain)
- [RecordingPart1](https://drive.google.com/drive/u/2/folders/1p-dxb0lSyd0BJQB-uSrrx4rHg0U2M2EQ)
- [RecordingPart2](https://drive.google.com/drive/u/2/folders/1tKTA-wpkCkMtU8wDOv686Sry6nfY3j0s)
