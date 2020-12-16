# product-app-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Some Key Notes

-Must match api url with your backend server

Example:

case 1. If your backend server is www.example.dev then
window.axios.defaults.baseURL = 'www.example.dev/api/user' ( main.js -> line :7 )

case 2. If your backend server is http://127.0.0.1:8000 then
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api/user' ( main.js -> line :7 )