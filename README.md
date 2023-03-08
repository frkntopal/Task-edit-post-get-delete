Öncelikle Axios'u kurmamız gerekiyor bunun içinse komut istemine veya editörünüzün terminaline aşağıdaki isteği yollamanız gerekiyor.

### `npm install axios`

*Axios bizlere bir çok kolaylık sağlıyor. Verilerimizin güncellenmesi,silinmesi,gönderilmesi ve çekilmesi gibi bir çok kolaylıklar sağlıyor. Bunları yaparken kısa komutlarla yapabilirsiniz. Eğer axios ile daha önce çok fazla veri çekme işlemleri yapmadıysanız sizlere tavsiyem bazı methodları yaparken urlde değişiklikler yapmanız gerekiyor bunun içinse lütfen vereceğim siteyi dikkatlice kontrol ediniz. Bu istekleri yapabilmek için lütfen bu siteyi inceleyiniz ; [Axios](https://axios-http.com/docs/intro)*


## *Daha sonra verilerimizin tutulacağı json dosyamıza ihtiyacımız var. Bunun için api adında bir klasör açıp içerisinede db.json dosyasını kaydettim. Daha sonra aşağıdaki istekleri terminalimde çalıştırarak json dosyasını 3004 portunda açtım. Şuna dikkat çekmek istiyorum. Eğer react projeniz 3000 portunda çalışıyorsa, json dosyanızı 3000 portunda açmamaya özen gösteriniz. Yoksa json dosyasınız 3000 portunda açıldığında react projenizin portu kapanacaktır.*

### `npm install -g json-server` and `json-server --watch api/db.json --port 3004`

## *`useEffect` and `useState`*

![Ekran Görüntüsü (102)](https://user-images.githubusercontent.com/100241189/223713645-140b6139-79e9-42f1-ac51-6ce5f1e8da55.png)



##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
