import { HttpClient, HttpRequestConfig, HttpResponse } from '../core/http-client.interface';

export interface FaceitConfig {
  apiKey: string;
  baseUrl?: string;
}

const DEFAULT_BASE_URL = 'https://open.faceit.com/data/v4';

/**
 * Creates a Fetch-based HTTP client configured for Faceit API
 * @param config - Faceit API configuration
 * @returns HttpClient implementation using Fetch API
 */
export function createFetchClient(config: FaceitConfig): HttpClient {
  const baseUrl = config.baseUrl || DEFAULT_BASE_URL;
  
  return {
    async get<T = any>(url: string, requestConfig?: HttpRequestConfig): Promise<HttpResponse<T>> {
      const queryParams = requestConfig?.params 
        ? '?' + new URLSearchParams(requestConfig.params).toString() 
        : '';
      
      const response = await fetch(`${baseUrl}${url}${queryParams}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Accept': 'application/json',
          ...requestConfig?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };
    },

    async post<T = any>(url: string, data?: any, requestConfig?: HttpRequestConfig): Promise<HttpResponse<T>> {
      const queryParams = requestConfig?.params 
        ? '?' + new URLSearchParams(requestConfig.params).toString() 
        : '';
      
      const response = await fetch(`${baseUrl}${url}${queryParams}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...requestConfig?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      
      return {
        data: responseData,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };
    },
  };
}

/**
 * Example implementation for Axios users
 * This is just an example - users need to install axios separately
 */
export const createAxiosClientExample = `
import axios from 'axios';
import { HttpClient } from 'faceit-sdk';

export function createAxiosClient(apiKey: string): HttpClient {
  const axiosInstance = axios.create({
    baseURL: 'https://open.faceit.com/data/v4',
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Accept': 'application/json',
    },
  });

  return {
    async get(url, config) {
      const response = await axiosInstance.get(url, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
    async post(url, data, config) {
      const response = await axiosInstance.post(url, data, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
  };
}
`;

/**
 * Example implementation for Node.js fetch users
 */
export const createNodeFetchExample = `
import { HttpClient } from 'faceit-sdk';

export function createNodeFetchClient(apiKey: string): HttpClient {
  const baseUrl = 'https://open.faceit.com/data/v4';
  
  return {
    async get(url, config) {
      const queryParams = config?.params 
        ? '?' + new URLSearchParams(config.params).toString() 
        : '';
      
      const response = await fetch(\`\${baseUrl}\${url}\${queryParams}\`, {
        headers: {
          'Authorization': \`Bearer \${apiKey}\`,
          'Accept': 'application/json',
          ...config?.headers,
        },
      });

      const data = await response.json();
      
      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };
    },
    async post(url, data, config) {
      const queryParams = config?.params 
        ? '?' + new URLSearchParams(config.params).toString() 
        : '';
        
      const response = await fetch(\`\${baseUrl}\${url}\${queryParams}\`, {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${apiKey}\`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...config?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      const responseData = await response.json();
      
      return {
        data: responseData,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };
    },
  };
}
`;