# Vacation Planner

![Home Page](https://i.ibb.co/1L3MYHq/Vacation-Planner-Home.jpg)

A full stack MERN application where users can plan their dream vacations.

## Signup/Login Page

![Signup](https://i.ibb.co/sCV8sbk/signup-gif.gif)

Once Signup is successful, users are redirected to the explore page.
On Login, users are redirected to the main page (Flights Page).

## Explore Page

![Explore Page](https://i.ibb.co/YDQ7Vsj/Explore3-gif.gif)

You can favorite locations during sign up or in the Explore Page.\
Clicking on a location will redirect to the flights page with the destination filled out.

## Home (Flights) Page

![Flights Page](https://i.ibb.co/RHQLBgv/Flights-gif.gif)

Select flights curated on departure/return dates and number of passengers and add them to cart.

## Hotels Page

![Hotels Page](https://i.ibb.co/rMDk5DP/Cars-gif.gif)

Select and add to cart a hotel to stay at.

## Cars Page

![Cars Page](https://i.ibb.co/8jpyGbS/Cars-gif.gif)

Select a model of car to rent.

## Checkout Page

![Checkout Page](https://i.ibb.co/hVFRsNm/Payment-gif.gif)

Pay for your flights,hotels,and car rentals in the checkout page.

## Getting started

1. Create the `.env` by using `.env.example` as a reference
2. Update the `.env` file with your correct information
3. Install dependencies: `npm i`
4. Run the server `node server/app.js`
5. Run the client `cd client && npm run start` 
6. Visit `localhost:8000` or wherever client is running.

## Dependencies

- cookie-parser
- dotenv
- express
- http-errors
- mongoose
- morgan
- nodemon
- validator
- bcrypt
- jwt
- aws-sdk
- multer
- multer-s3
- react-dropzone
- date-fns
