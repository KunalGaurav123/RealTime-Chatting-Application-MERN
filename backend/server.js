// // import path from "path";
// // import express from "express";
// // import dotenv from "dotenv";
// // import cookieParser from "cookie-parser";
// // import axios from "axios";

// // import authRoutes from "./routes/auth.routes.js";
// // import messageRoutes from "./routes/message.routes.js";
// // import userRoutes from "./routes/user.routes.js";

// // import connectToMongoDB from "./db/connectToMongoDB.js";
// // import { app, server } from "./socket/socket.js";

// // dotenv.config();

// // const __dirname = path.resolve();
// // const PORT = process.env.PORT || 5000;

// // app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// // app.use(cookieParser());

// // app.use("/api/auth", authRoutes);
// // app.use("/api/messages", messageRoutes);
// // app.use("/api/users", userRoutes);

// // app.use(express.static(path.join(__dirname, "/frontend/dist")));

// // app.get("*", (req, res) => {
// // 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// // });

// // // Self-pinging route to keep the server warm
// // app.get('/ping', (req, res) => {
// //   res.send('Pong');
// // });

// // // Function to periodically ping the server
// // const pingSelf = () => {
// //   axios.get(`https://realtime-chatting-application-mern.onrender.com/`)
// //     .then(() => console.log('Pinged self successfully!'))
// //     .catch((err) => console.error('Error pinging self:', err));
// // };

// // // Ping the server every 5 minutes
// // setInterval(pingSelf, 5 * 60 * 1000);

// // server.listen(PORT, () => {
// // 	connectToMongoDB();
// // 	console.log(`Server Running on port ${PORT}`);
// // 	pingSelf(); // Initial ping to warm up the server on start
// // });



// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import axios from "axios";

// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server } from "./socket/socket.js";

// dotenv.config();

// const __dirname = path.resolve();
// const PORT = process.env.PORT || 5000;

// app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// app.use(cookieParser());

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

// // Self-pinging route to keep the server warm
// app.get('/ping', (req, res) => {
//   res.send('Pong');
// });

// // Function to periodically ping multiple servers
// const pingMultipleLinks = (urls) => {
//   urls.forEach((url) => {
//     axios.get(url)
//       .then(() => console.log(`Pinged ${url} successfully!`))
//       .catch((err) => console.error(`Error pinging ${url}:`, err));
//   });
// };

// // Array of URLs to ping
// const urlsToPing = [
//   'https://realtime-chatting-application-mern.onrender.com/',
//   'https://codefuse-backend.onrender.com',
//   'https://codefuse-c88s.onrender.com'
// ];

// // Ping the servers every 5 minutes
// setInterval(() => pingMultipleLinks(urlsToPing), 5 * 60 * 1000);

// server.listen(PORT, () => {
//   connectToMongoDB();
//   console.log(`Server Running on port ${PORT}`);
//   pingMultipleLinks(urlsToPing); // Initial ping to warm up the servers on start
// });


// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import axios from "axios";

// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";

// import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server } from "./socket/socket.js";

// dotenv.config();

// const __dirname = path.resolve();
// const PORT = process.env.PORT || 5000;

// app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// app.use(cookieParser());

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

// // Self-pinging route to keep the server warm
// app.get('/ping', (req, res) => {
//   res.send('Pong');
// });

// // Function to periodically ping multiple servers
// const pingMultipleLinks = (urls) => {
//   urls.forEach((url) => {
//     axios.get(url)
//       .then(() => console.log(`Pinged ${url} successfully!`))
//       .catch((err) => console.error(`Error pinging ${url}:`, err));
//   });
// };

// // Array of URLs to ping
// const urlsToPing = [
//   'https://realtime-chatting-application-mern-07xq.onrender.com',
//   'https://codefuse-1.onrender.com',
//   'https://codefuse-uvgx.onrender.com'
// ];

// // Ping the servers every 5 minutes
// setInterval(() => pingMultipleLinks(urlsToPing), 5 * 60 * 1000);

// server.listen(PORT, () => {
//   connectToMongoDB();
//   console.log(`Server Running on port ${PORT}`);
//   pingMultipleLinks(urlsToPing); // Initial ping to warm up the servers on start
// });

import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import axios from "axios";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Self-pinging route to keep the server warm
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Function to check the health of the server
const checkServerHealth = async (url) => {
  try {
    await axios.get(url);
    console.log(`Server at ${url} is healthy`);
    return true;
  } catch (err) {
    console.error(`Server at ${url} is down:`, err);
    return false;
  }
};

// Function to ping the server only if it's down
const pingServerWhenDown = async (url) => {
  const isServerHealthy = await checkServerHealth(url);
  if (!isServerHealthy) {
    console.log(`Pinging ${url} to wake it up...`);
    try {
      await axios.get(url);
      console.log(`Pinged ${url} successfully!`);
    } catch (err) {
      console.error(`Error pinging ${url}:`, err);
    }
  }
};

// Array of URLs to monitor
const urlsToMonitor = [
  'https://realtime-chatting-application-mern-07xq.onrender.com',
  'https://codefuse-1.onrender.com',
  'https://codefuse-uvgx.onrender.com'
];

// Check the server health every 5 minutes, but only ping if the server is down
setInterval(() => {
  urlsToMonitor.forEach((url) => pingServerWhenDown(url));
}, 5 * 60 * 1000);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
