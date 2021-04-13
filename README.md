

```
heroku apps
```

Copy the name of the app you want to connect the project to, then run:

```
heroku git:remote -a <PASTE_YOUR_APP_NAME_HERE>
```


```
heroku buildpacks
```

```
heroku buildpacks:remove mars/create-react-app-buildpack
```

```
heroku create
```


```
git remote -v
```

You should see heroku `https://git.heroku.com/<RANDOMLY_GENERATED_NAME_OF_YOUR_APP>` in the list. This means you have successfully connected your project to the newly created Heroku app under the git remote of `heroku`.


## Deploying to Heroku
```
heroku config:set STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
```
```
git push heroku master
```

You will see this warning message if you are pushing to an existing app:

```
! [rejected]        master -> master (fetch first)
error
```

This is because we are pushing to an existing app that was deploying an entirely different repository from what we have now. Simply run:

```
git push heroku master --force
```
