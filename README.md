### Notes

`tsconfig.json` for `ionic serve`

    "lib": [
      "dom",
      "es6"
    ],

`tsconfig.json` for `ionic build` due to [angular2-apollo](http://dev.apollodata.com/angular2/initialization.html#typescript-es2015)

    "lib": [
      "dom",
      "es5"
    ],


or simply uninstall `@types/es6-shim`

```
@types/es6-shim
```

#### Splash Screen

`config.xml` recommended settings

```xml
<preference name="SplashScreenDelay" value="6000"/>
<preference name="AutoHideSplashScreen" value="false"/>
<preference name="SplashShowOnlyFirstTime" value="false"/>
```

`app.component.ts` hide splash screen on app initialize

```js
initializeApp() {
  this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    StatusBar.styleDefault();
    Splashscreen.hide();
  });
}
```