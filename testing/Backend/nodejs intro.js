// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is rohan');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Date & Time In JavaScript</title>
  </head>
  
  <style>
      .container{
          font-size: 23px;
          background-color: pink;
          border: 2px solid black;
          padding: 14px;
          margin: 4px;
          border-radius: 8px;
          text-align: center;
          font-family: 'Courier New', Courier, monospace;
          box-shadow: 2px 2px 10px rgb(153, 129, 133);
      }
  </style>
  
  <body>
      <div class="container">
          Current Time is ⏰ <span id="time"></span>
      </div>
  
      <script>
          let now = new Date();
          console.log(now);
  
          let dt = new Date(7000);
          console.log(dt);
  
          let newDate = new Date("2029-08-18");
          console.log(newDate);
  
          // let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
          let new1Date = new Date(3020, 07, 18, 8, 10, 40, 27);
          console.log(new1Date);
  
          let year = new1Date.getFullYear();
          console.log("This Year is ", year);
  
          let date = new1Date.getDate();
          console.log("This Date is ", date);
  
          let month = new1Date.getMonth();
          console.log("This Month is ", month);
  
          let hour = new1Date.getHours();
          console.log("This Hour is ", hour);
  
          // use --->  Date.now()   -    use for get time jo abhi tak beet chuka hai
  
          //for set date & time like this
          newDate.setDate(7);
          newDate.setMinutes(15);
          console.log(newDate);
  
          // For UTC    Time Zone
          let currentDate = new Date();
          let utcDate = currentDate.toUTCString();
          console.log(utcDate)
  
  
          // this is show on home      &          For CLOCK
          function displayTime(){
              time.innerHTML = new Date();
          };
          setInterval(displayTime, 0000);
      </script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});