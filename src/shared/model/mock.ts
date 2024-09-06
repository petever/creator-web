import {createAlovaMockAdapter} from "@alova/mock";
import fetchAdapter from 'alova/fetch';
import todoMock from "@/shared/mocks/loginMock";
import {mocks} from "@/shared/mocks";

export const mockAdapter = createAlovaMockAdapter([...mocks], {
  enable: true,
  delay: 1000,
  onMockResponse ({ body, responseHeaders, status = 200, statusText = 'ok' }) {
    return {
      response: new Response(
        /^\[object (Blob|FormData|ReadableStream|URLSearchParams)\]$/i.test(Object.prototype.toString.call(body))
          ? body
          : JSON.stringify(body),
        {
          status,
          statusText
        }
      ),
      headers: new Headers(responseHeaders)
    };
  }
});
