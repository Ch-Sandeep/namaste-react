# Namaste React

---

# Parcel

- Dev build
- Local Server
- HMR - Hot Module Replacement (Auto refresh app on save after changes)
- Uses File watching algorithm - Written in C++ (To detect changes)
- Caching - Faster builds
- Image Optimization
- File Minification
- Bundling
- File compressing

---

# Redux ToolKit

- Install redux toolkit(@reduxjs/toolkit) and react-redux
- Build our store
- Connect our store to our app
- Create a slice(Cart slice)
- Dispatch(action)
- Selector

---

# Types of testing (developer)

- Unit testing - Testing one unit(comp) of app
- Integration testing - Testing the integration of of our component (Ex:- Making search in our app)
  - Integration testing is a phase in software development where individual units, modules, or services are combined and tested as a group
- E2E(End to End) testing - Testing all the flows in our app (Right from login user to exploring all services to logout)

---

# Setting up testing in our app

- Install React testing library
- Install jest
- Install babel dependencies (You can find in jest docs - Go to "using babel" section)
- Configure babel
- Configure parcel config file to disable default babel transpilation (.parcelrc file)
- Jest Configuration - npx create-jest
- Install jsdom library - npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react to make JSX work in test cases
- Include @babel/preset-react inside my babel.config.js (Add ["@babel/preset-react", { runtime: "automatic" }] to presets array)
  - Doing this cause jest should convert JSX to HTML
- Install @testing-library/jest-dom (toBeInTheDocument() won't work without this)
