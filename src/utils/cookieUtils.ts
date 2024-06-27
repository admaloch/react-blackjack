import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

export const getOrCreateCookie = (cookieName: string): string => {
  let cookieValue = Cookies.get(cookieName);
  if (!cookieValue) {
    cookieValue = uuidv4();
    Cookies.set(cookieName, cookieValue, { expires: 365 });
  }
  return cookieValue;
};

