# Backdrop React Native Coding Challenge
The Backdrop team created this challenge for its applicants. This repo contains my version of the challenge
## Features
- Fetch cats images and info from theCatApi
- Like favourite cats
- Stores liked cats lists locally

## Technologies Used
- React Native
- Cat Api
- React native MMKV
- React query


## How to build
Clone this repo to your machine: 
```
$ git clone https://github.com/benjamineruvieru/Backdrop-React-Native-Coding-Challenge.git
```
```
$ cd Backdrop-React-Native-Coding-Challenge
```
Install dependencies: 
```
$ npm install
```
or if you prefer yarn
```
$ yarn
```

If you intend to use iOS to run the project: 
```
$ cd ios
```
```
$ pod install
```
Return to the project main directory: 
```
$ cd ..
```
Head over to [thecatapi.com]('https://thecatapi.com) and get a free API key 

Create a .env file in the main directory of the project

Input your API in the file as shown below

CAT_API_KEY=<YOUR_API_KEY>

To run on android: 
```
$ npx react-native run-android
```
To run on iOS: 
```
$ npx react-native run-ios
```

## Testing
Run this command to run the tests
```
$ npm run test
```
or if you prefer yarn
```
$ yarn test
```