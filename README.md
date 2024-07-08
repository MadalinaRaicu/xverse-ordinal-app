# Xverse Ordinals App

This is a React application for looking up Bitcoin wallet addresses to display their ordinal inscriptions. The application fetches data using the Xverse API and displays the details of ordinal inscriptions, including handling different content types such as images and text.

## Features

- Input a Bitcoin wallet address to look up ordinal inscriptions.
- Display a paginated list of ordinal inscriptions.
- View detailed information of individual ordinal inscriptions, including content.
- Dark theme with responsive design.

### Installation

1. **Clone the repository:**

```sh
git clone <repository_url>
cd ordinals-app
```

2. **Install dependencies:**

```sh
npm install
```

3. **Run the application:**

```sh
npm start
```

This will start the development server and open the application in your default browser.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Declarative routing for React applications.


### API Endpoints

The application uses the following API endpoints from the Xverse API:

- **Fetch UTXOs containing inscriptions:**
  ```
  GET https://api-3.xverse.app/v1/address/:address/ordinal-utxo
  ```
  Example: `https://api-3.xverse.app/v1/address/bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs/ordinal-utxo`

- **Fetch details of a specific inscription:**
  ```
  GET https://api-3.xverse.app/v1/address/:address/ordinals/inscriptions/:inscriptionId
  ```
  Example: `https://api-3.xverse.app/v1/address/bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs/ordinals/inscriptions/9a2315da257d6c1010157bec4fecb20472666055ed79cd7462c28cf15b298522i0`

