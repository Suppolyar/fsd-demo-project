# Feature Sliced Design (FSD) Demo Project
Vue 3 + TypeScript + Vite + TailwindCSS + Eslint + Prettier  
This [starter-kit](https://github.com/Suppolyar/starter-kit-vue-ts-tailwindcss-fsd) was taken as a basis
## About this Enhanced Starter-Kit
This Starter-Kit includes all the features of the original template (Vite, Vue 3, Pinia, Vue Router, Tailwind CSS, ESLint, and Prettier) and extends it with the Feature Sliced Design architecture. FSD is a methodology for frontend projects, which aims to divide the application according to business logic and scopes of responsibility.

- Feature Sliced Design: A methodology for structuring projects in a way that allows for scalability, maintainability, and ease of understanding. It helps in organizing codebase around features and business processes.

### Enhanced Project Structure with FSD

```
├── src/
│   ├── app/              # Core application settings (e.g., initialization, providers)
│   ├── pages/            # Application pages with routing
│   ├── widgets/          # Complex UI components used across features        
│   ├── features/         # Feature folders (each feature encapsulates its own logic and UI)
│   ├── entities/         # Business entities
│   └── shared/           # Shared utilities, styles, and components   
├── .eslintrc.js          # ESLint configuration
├── .prettierrc.js        # Prettier configuration
├── vite.config.js        # Vite configuration
└──...                   # Other directories remain as per original structure
```

## Installation and Running

To get started with the project, follow these steps:

1**Install dependencies**:
   ```bash
   yarn install
   ```

2**Run the development server**:
   ```bash
   yarn dev
   ```
   This will start the development server, and you can access the application in your browser at `http://localhost:3000` or the specified port.

3**Build for production**:
   ```bash
   yarn build
   ```
   This command will create an optimized production build of the application.

4**Preview the production build**:
   ```bash
   yarn preview
   ```
   Use this command to locally preview the production build before deploying it.

These steps will help you set up and run the project smoothly. If you encounter any issues, feel free to check the [project repository](https://github.com/Suppolyar/my-enhanced-template) for more details or to open an issue.

## Contribution
Your contributions are always welcome! If you have suggestions for improving the project or have found a bug, please create a new Issue or Pull Request in the [project repository](https://github.com/Suppolyar/my-enhanced-template).
