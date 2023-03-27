
const API_BASE_URL = 'https://autumn-delicate-wilderness.glitch.me';

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};
export const isAuthenticated = () => {
  return !!getToken(); 
};
export const clearToken = () => {
  localStorage.removeItem('token');
};
export async function registerUser({  email, password }) {
  const response = await fetch(`${API_BASE_URL}/v1/auth/register/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  
    return await response.json();
  }

  export const loginUser = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/v1/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (data.token) {
      // setAuthenticated(true);
      setToken(data.token); // Store the token in localStorage
      console.log(getToken());
    }
    console.log(data);
    return data;
  };

  export const logoutUser = () => {
    clearToken(); // Remove the token from localStorage
  };
  
  export const submitOrder = async (orderData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Order submitted successfully:", responseData);
      } else {
        console.error("Error submitting the order:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting the order:", error);
    }
  };
  