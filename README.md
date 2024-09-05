# nebula-web

## About the project

This is a project for univesity course "Software Engineering". The project is a web application for book store. The application is built with React and uses a REST API for data fetching. This project structure combines two methodology: Clean Architecture and Feature-Sliced Design.

### Built with

- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query](https://tanstack.com/query/v3/)
- [Vite](https://vitejs.dev/)

## Getting Started

To get local copy up and running follow these steps.

### Prerequisites

- backend_publisher (see instructions [here](https://github.com/prtrymer/backend_publisher))
- yarn `npm i -g yarn`

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Denlich/nebula-web.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```

## Running locally

1. Install dependencies

```bash
yarn install
```

2. Copy `.env.example` to `.env.local`

```bash
cp .env.example .env.local
```

3. Start Vite development server

```bash
yarn dev
```

or start Storybook stand

```bash
yarn storybook
```

## License

Distributed under the MIT License. See `LICENSE` for more information.
