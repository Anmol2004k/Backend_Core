browser,V8 Engine, overall working
using import , export
use npm
uses of any packeage 
1. npm init -y   >>>>     es s setup hoga envirioment node  module , package.json etc..
2. npm i package ka naam >>> wo package install ho jygaa

express 
USE HOTA HAI ROUTING K LIYE.
alg alg page alag alg rout(p action m aaye meand dikhe)

Example - www.instagram/profile.com
Example - www.instagram/message.com
Example - www.instagram/reels.com
Example - www.instagram/notification.com


  use of express >>>

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



 for live changes and live view 🚀🚀🚀

1. install nodemon
   npm i nodemon -g

2. run the file with NODEMON
 nodemon (./script.js) 
        koi bhi file
3. if it show error try this 
npx nodemon (./script.js)  ✅


MIDDELWARE...



