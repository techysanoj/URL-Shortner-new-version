# URL Shortener (New Version)

A modern, secure, and lightning-fast URL shortener service built with Node.js. Instantly convert long URLs into short, shareable links and track analytics in real-time. Perfect for social media, marketing, and web applications.

## 🚀 Features

- **Custom Short URLs**: Generate branded or personalized short links.
- **Click Analytics**: Track URL usage, referrers, and stats.
- **RESTful API**: Integrate URL shortening into your own apps.
- **Secure**: Protects against abuse and malicious redirects.
- **Easy to Use**: Minimal setup, clean codebase, and ready-to-deploy.
- **Scalable**: Built for high performance and easy scaling.

## 🛠️ Tech Stack

- **Node.js** (backend logic)
- **Express.js** (routing and server)
- **MongoDB** (URL & analytics storage)
- **Mongoose** (MongoDB ODM)
- **Other dependencies:** See [`package.json`](./package.json)

## 📂 Project Structure

```
.
├── controller/        # Business logic and controllers
├── models/            # MongoDB data models
├── routes/            # App and API routes
├── connection.js      # Database connection setup
├── index.js           # Main entry point (Express app)
├── package.json       # Dependencies & scripts
├── url_shortner_requirements.txt # Requirements/notes
```

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or cloud)

### Installation

```bash
git clone https://github.com/techysanoj/URL-Shortner-new-version.git
cd URL-Shortner-new-version
npm install
```

### Configuration

Edit `connection.js` to set your MongoDB connection string.

### Running the Application

```bash
npm start
```
The server runs on [http://localhost:3000](http://localhost:3000) by default.

## 📖 API Usage

### Shorten a URL

`POST /api/shorten`

Request body:
```json
{
  "originalUrl": "https://your-long-url.com"
}
```

Response:
```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

### Redirect

Visiting `http://localhost:3000/abc123` will redirect to the original URL.

### Analytics

Endpoint and analytics implementation details can be extended as needed.

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/FeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/FeatureName`)
5. Open a Pull Request

## ⭐️ Why Use This URL Shortener?

- Built with best practices in Node.js and MongoDB
- Designed for extensibility (custom domains, analytics, admin dashboard, etc.)
- Perfect for learning, side projects, or deploying at scale

## 📄 License

[MIT](./LICENSE)

---

> Made with ❤️ by [techysanoj](https://github.com/techysanoj)
