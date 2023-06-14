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
- build out the AuthContext.tsx file with AuthProps Interface, useAuth function, and AuthContext.Provider return at the bottom
- create your screens and configure App.tsx for routing
- Build out Login screen with appropriate form that uses the onLogin and Register functions from AuthContext
  -Build out Home screen and create a Logout Button
- Finito!

---

## Resources

---

[ReactNativeKeychainDocs](https://github.com/oblador/react-native-keychain)
[RecordingPart1](https://drive.google.com/drive/u/2/folders/1p-dxb0lSyd0BJQB-uSrrx4rHg0U2M2EQ)
