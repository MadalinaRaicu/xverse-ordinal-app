# Xverse Ordinals App

This is a React application for looking up Bitcoin wallet addresses to display their ordinal inscriptions. The application fetches data using the Xverse API and displays the details of ordinal inscriptions, including handling different content types such as images and text.

<img width="387" alt="Screenshot 2024-07-08 at 15 18 51" src="https://github.com/MadalinaRaicu/xverse-ordinal-app/assets/16125548/ccdf33a3-c588-425d-9e5d-1dd31e539171">

<img width="389" alt="Screenshot 2024-07-08 at 15 19 16" src="https://github.com/MadalinaRaicu/xverse-ordinal-app/assets/16125548/e3f875e1-4348-439d-8473-51ac7fe5be44">


## Features

- Input a Bitcoin wallet address to look up ordinal inscriptions.
- Display a paginated list of ordinal inscriptions.
- View detailed information of individual ordinal inscriptions, including content.
- Dark theme with responsive design.

## Installation

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

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Declarative routing for React applications.

## API Endpoints

The application uses the following API endpoints from the Xverse API:

- **Fetch UTXOs containing inscriptions:**

  ```bash
  GET https://api-3.xverse.app/v1/address/:address/ordinal-utxo
  ```

  Example:

  ```url
  https://api-3.xverse.app/v1/address/bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs/ordinal-utxo
  ```

- **Fetch details of a specific inscription:**

  ```bash
  GET https://api-3.xverse.app/v1/address/:address/ordinals/inscriptions/:inscriptionId
  ```

  Example:

  ```url
  https://api-3.xverse.app/v1/address/bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs/ordinals/inscriptions/9a2315da257d6c1010157bec4fecb20472666055ed79cd7462c28cf15b298522i0
  ```

## Future Enhancements

1. **Enhanced Error Handling:**
   - Improve error messages to provide more detailed information to the user about what went wrong.
   - Implement retry logic for API calls in case of transient network errors.

2. **User Authentication:**
   - Implement user authentication to allow users to save and manage their favorite Bitcoin addresses and inscriptions.

3. **Search and Filter:**
   - Add search functionality to quickly find specific inscriptions.
   - Implement filters to sort inscriptions by different criteria such as date, type, or value.

4. **Offline Support:**
   - Implement service workers to provide offline support, allowing users to view previously fetched inscriptions without an internet connection.

5. **Enhanced UI/UX:**
   - Improve the UI with more advanced components and animations for a better user experience.
   - Implement a light theme option, allowing users to switch between dark and light themes.

6. **Enhanced image quality**
   - Implement functionality to load higher resolution images for inscriptions to improve visual quality.
   - Utilize progressive image loading techniques to enhance performance and user experience, ensuring that images load smoothly and efficiently.
   - Introduce support for modern image formats like WebP, which offer better compression and quality compared to traditional formats like JPEG and PNG.

## Trade-offs

1. **Development Speed vs. Performance:**
   - Using `create-react-app` and Tailwind CSS allowed for rapid development and easier styling, but it may introduce some performance overhead compared to a more optimized custom setup.

2. **Client-side Rendering:**
   - The application uses client-side rendering, which is simple and effective for this use case. However, for larger applications or SEO-critical pages, server-side rendering (SSR) might be more appropriate.

3. **API Dependence:**
   - The application relies heavily on the Xverse API. Any downtime or changes to the API could impact the application's functionality. Implementing caching and fallback mechanisms could mitigate some of this risk.

4. **Error Handling:**
   - Basic error handling is implemented to display error messages. However, more sophisticated error handling (e.g., differentiating between network errors, API errors, and user input errors) would enhance the user experience but requires more development time.
