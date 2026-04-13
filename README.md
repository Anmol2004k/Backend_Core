##  browser,V8 Engine, overall working
## using import , export
## use npm
## uses of any packeage 
1. npm init -y   >>>>     es s setup hoga envirioment node  module , package.json etc..
2. npm i package ka naam >>> wo package install ho jygaa

## Express 
USE HOTA HAI ROUTING K LIYE.
alg alg page alag alg rout(p action m aaye meand dikhe)

Example - www.instagram/profile.com
Example - www.instagram/message.com
Example - www.instagram/reels.com
Example - www.instagram/notification.com


##  use of express >>>

 1. npm i express

 2. boiler code in js file 

   import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

3. packaje.json m >>"description" ke niche ye line add kar dein
         "type": "module",

4. Go on local host  http://localhost:3000   code is live  ✅     



## for live changes and live view 🚀🚀🚀

1. install nodemon
   npm i nodemon -g

2. run the file with NODEMON
 nodemon (./script.js) 
        koi bhi file
3. if it show error try this 
npx nodemon (./script.js)  ✅


## MIDDELWARE...

Routing k bich m hum koi bhi kaam krva sakte hai 

app.use(function(req, res, next) {
   console.log("Hello from middleware 2");
   next();
});

kafi useful concept hai , multiple middelware bhi use ho sakta hai 


Express >>>

## node vs express 

-- node main hai , node k pass capa baility hai server ka code likhne(HTTP) ka but wo kafi complicated hai esliye hu express ka use krte hai server bnane k liye easily sab chiz ho jata hai 

## What is Express js - Package, Routing

## Why is Express js -- HTTp is diffult to use but express is easy...

## ROUTING  -- Routs bnana ek process ko Routing bolte hai 

/ profile
/ home
/ blog


## app.use(function(req, res, next) {
   console.log("Hello from middleware 2");
   next();
});

## Request  (req)

sara data hota hai aane wala  user ka jsee location , IP , Device name Etc..

## Response  (res)

esme control hai jiske bases p hum server se response bejte hai 

## next ();

push hota hai 1  middelware s rout pjne l kiye .>>>> 


## Daynamic routing 

asaa koi route jiska khouch parts same hota khouch url chnge hota rahata hai eske liye hum  Daynamic routing bnate hai 

/profile/anmol
/profile/kanchan
/profile/ratan
/profile/prince 
/profile/rohini

/profile/:username >> acess fo every url

## Tamplate Engine >> Ejs




