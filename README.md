# Website Health Checker (by Lucas)

A minimalistic, fast, reliable and anonymous way to check a website's availability

## 🚀 Features

- ✅ Fast website availability checker
- ✅ Response with correspondent status code

## 🔧 Technologies Used

- **Vite (React)** - Web interface development
- **Cloudflare API**

## 📁 Project Structure
```bash
website-health-checker/
├── health-checker-api/
│   └── src/
│       └── index.ts          # Cloudflare API Worker code
├── scripts/
│   └── healthCheck.ts
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    └── main.tsx
```

⚠️ Known Issues

- The search may fail if the URL is not in the requested format (`https://www.[url]`)
- In case of too many simultaneous requests, the API may reach its rate limit

## 👥 Authors
- [**Lucas Santos**](https://github.com/8126Lucas) - Web (React) interface and Cloudflare API Workers development

## 🤝 How to Contribute

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request
