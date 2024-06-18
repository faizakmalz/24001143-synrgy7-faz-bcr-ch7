// export const httpFetch = async (endpoint: string, useToken: boolean, body: any, options: RequestInit) => {
//     const url = `http://localhost:3002/api/v1/${endpoint}`;
//     const token = localStorage.getItem('token');
  
//     const headers: HeadersInit = {
//       'Content-Type': 'application/json',
//       ...options.headers,
//     };
  
//     if (useToken && token) {
//       (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
//     }
  
//     const response = await fetch(url, {
//       ...options,
//       headers,
//       body: JSON.stringify(body),
//     });
  
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
  
//     return response.json();
//   };
  